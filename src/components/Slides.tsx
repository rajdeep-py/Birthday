import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { config } from '../config';
import { Heart, Sparkles, MapPin, Calendar, Quote, ArrowRight, Lock, PhoneCall, Music, Play, Pause, Volume2, Ticket, CheckCircle2, Plane, Compass } from 'lucide-react';
import { ImageLoader } from './ImageLoader';

export function HeyYouSlide() {
  return (
    <div className="w-full flex flex-col items-center text-center px-2 -translate-y-8 sm:-translate-y-12 select-none pointer-events-none">
      {/* Top Luxury Romantic Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: -14, scale: 0.88 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50/95 border border-rose-200/90 shadow-xs mb-3.5 backdrop-blur-md"
      >
        <span className="text-[11px] animate-pulse">🌻</span>
        <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.22em] uppercase font-bold text-rose-700">
          The Main Character • Certified Cutie
        </span>
        <span className="text-[11px] animate-pulse">✨</span>
      </motion.div>

      {/* Main Shimmering Romantic Headline */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#D92658] via-[#E11D48] to-[#FB7185] drop-shadow-xs"
      >
        Hey you... <span className="inline-block animate-bounce">🌻</span>
      </motion.h1>

      {/* Romantic "Crazy As Hell" Love Card */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[325px] sm:max-w-[350px] bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-rose-100/90 shadow-[0_12px_36px_-12px_rgba(225,29,72,0.16)] relative space-y-2.5"
      >
        <p className="font-serif text-[16px] sm:text-[17.5px] text-gray-800 leading-snug font-normal">
          Yes, <span className="text-rose-600 font-semibold italic">you</span>. The girl with the squishiest chubby cheeks and the smile that literally hijacked my entire universe.
        </p>

        <p className="font-sans text-[12px] sm:text-[13px] text-gray-600 leading-relaxed font-normal">
          I don't know who allowed you to be this breathtaking, but you're stuck with me in every single lifetime. <span className="text-rose-500 font-semibold">Zero refunds. ❤️</span>
        </p>

        {/* Playful Inside-Joke Micro Badge */}
        <div className="pt-1 flex items-center justify-center">
          <span className="inline-block text-[11px] font-sans tracking-wide text-rose-700 bg-rose-100/80 border border-rose-200/50 px-3 py-1 rounded-full font-medium shadow-2xs">
            chupp... don't say anything, just blush 🤭❤️
          </span>
        </div>
      </motion.div>

      {/* Auto-play Story Pulse Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2.2, delay: 0.5 }}
        className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-50/70 border border-amber-200/50 text-[10px] font-sans uppercase tracking-[0.18em] text-amber-800 font-medium"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
        <span>Tap to skip</span>
        <span className="text-xs">➔</span>
      </motion.div>
    </div>
  );
}

export function TextSlide({ slide }: { slide: any }) {
  const isHeyYou = slide.id === 'intro-1' || slide.content?.startsWith('Hey you');

  if (isHeyYou) {
    return <HeyYouSlide />;
  }

  // Grand Romantic Editorial Chapter Heading
  if (slide.heading) {
    return (
      <div className="w-full flex flex-col items-center justify-center text-center px-4 py-6 select-none pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50/90 border border-rose-200/80 shadow-xs mb-4 backdrop-blur-md"
        >
          <Sparkles className="w-3 h-3 text-rose-500" />
          <span className="text-[9.5px] font-sans tracking-[0.25em] uppercase font-bold text-rose-700">
            Special Chapter
          </span>
          <Sparkles className="w-3 h-3 text-rose-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-red-600 to-pink-600 drop-shadow-xs mb-4 leading-tight"
        >
          {slide.content}
        </motion.h2>

        {slide.subtext && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/80 border border-rose-100 shadow-xs backdrop-blur-sm"
          >
            <p className="text-xs sm:text-sm font-sans tracking-widest text-rose-700/90 font-medium">
              {slide.subtext}
            </p>
          </motion.div>
        )}
      </div>
    );
  }

  // Intimate, Romantic Love-Letter Card for Narrative Confessions
  return (
    <div className="w-full flex flex-col items-center justify-center px-3 py-4 select-none pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[340px] sm:max-w-[365px] bg-white/85 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-rose-100/90 shadow-[0_12px_36px_-12px_rgba(225,29,72,0.14)] relative space-y-4 text-center"
      >
        <Quote className="w-6 h-6 text-rose-200/80 mx-auto -mb-1" />

        <div className="space-y-3">
          {slide.content
            .split('\n')
            .filter((line: string) => line.trim().length > 0)
            .map((line: string, i: number) => (
              <p
                key={i}
                className="font-serif text-[17px] sm:text-[18.5px] text-gray-800 leading-relaxed font-normal"
              >
                {line}
              </p>
            ))}
        </div>

        {slide.subtext && (
          <div className="pt-2 flex justify-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-[11px] font-sans tracking-wide text-rose-700 font-medium shadow-2xs">
              {slide.subtext}
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function MemorySlide({ index }: { index: number }) {
  const memory = config.memories[index];
  const [memoryImageLoaded, setMemoryImageLoaded] = useState(false);

  useEffect(() => {
    setMemoryImageLoaded(false);
  }, [index, memory.photo]);

  return (
    <div className="w-full flex flex-col items-center justify-center px-3 py-2 text-center select-none pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[335px] sm:max-w-[360px] bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-rose-100/90 shadow-[0_15px_40px_-15px_rgba(225,29,72,0.15)] flex flex-col items-center"
      >
        {/* Date & Chapter Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-rose-50 border border-rose-200/70 text-[9.5px] sm:text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-rose-700 mb-2.5">
          <Calendar className="w-2.5 h-2.5 text-rose-500" />
          <span>{memory.date}</span>
          <span>•</span>
          <span>CHAPTER 0{memory.id}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 tracking-tight">
          {memory.title}
        </h3>

        {/* Polaroid Memory Photo Thumbnail if provided */}
        {memory.photo && (
          <div className="relative my-2 sm:my-2.5 rotate-1 group inline-flex flex-col items-center">
            {/* Washi Tape Strip */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-amber-100/90 -rotate-2 border-b border-amber-200/50 shadow-2xs z-20 backdrop-blur-xs rounded-xs pointer-events-none" />
            <div className="rounded-xl overflow-hidden shadow-md border-2 border-white relative bg-rose-50/40">
              <ImageLoader isLoading={!memoryImageLoaded} />
              <img
                src={memory.photo}
                alt={memory.title}
                onLoad={() => setMemoryImageLoaded(true)}
                className={`max-h-[235px] sm:max-h-[265px] w-auto max-w-[270px] sm:max-w-[300px] object-contain block group-hover:scale-105 transition-all duration-500 ${memoryImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          </div>
        )}

        {/* Story Description */}
        <p className="font-sans text-gray-700 text-[13px] sm:text-[13.5px] leading-relaxed mb-3 px-1 font-normal">
          {memory.description}
        </p>

        {/* Handwritten Romantic Quote Card */}
        <div className="w-full bg-rose-50/70 border border-rose-200/60 rounded-xl p-2 sm:p-2.5 relative">
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-300 absolute -top-1.5 left-3.5" />
          <p className="font-serif italic text-rose-800 text-[13.5px] sm:text-[14px] leading-snug">
            "{memory.caption}"
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function PhotoSlide({ index }: { index: number }) {
  const photo = config.photos[index];
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isPortrait, setIsPortrait] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [index, photo.src]);

  const handlePhotoTap = (e: React.MouseEvent) => {
    e.stopPropagation();
    const id = Date.now();
    setHearts(prev => [
      ...prev.slice(-4),
      { id, x: -15 + Math.random() * 30, y: -20 - Math.random() * 20 },
    ]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== id));
    }, 1100);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-1 px-1 select-none">
      {/* Romantic Film Polaroid Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? 2 : -2 }}
        animate={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? 1.5 : -1.5 }}
        whileHover={{ scale: 1.02, rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={handlePhotoTap}
        className={`bg-white p-3 sm:p-3.5 pb-12 sm:pb-14 rounded-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.22)] relative w-full ${isPortrait ? 'max-w-[315px] sm:max-w-[340px]' : 'max-w-[350px] sm:max-w-[380px]'
          } flex flex-col pointer-events-auto cursor-pointer border border-gray-100 group transition-all duration-300`}
      >
        {/* Realistic Washi Tape at Top */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-amber-100/90 border-b border-amber-200/50 shadow-2xs rotate-1 z-20 backdrop-blur-xs rounded-xs" />

        {/* Floating Hearts on Tap */}
        <AnimatePresence>
          {hearts.map(h => (
            <motion.span
              key={h.id}
              initial={{ opacity: 1, scale: 0.4, x: 0, y: 0 }}
              animate={{ opacity: 0, scale: 1.4, x: h.x, y: h.y }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-2xl z-30 filter drop-shadow-xs"
            >
              💖
            </motion.span>
          ))}
        </AnimatePresence>

        {/* The Photo Image Container */}
        <div className={`w-full relative overflow-hidden rounded-xs bg-gray-50/60 flex items-center justify-center ${isPortrait ? 'h-[360px] sm:h-[400px]' : 'h-[260px] sm:h-[295px]'
          }`}>
          {/* Image Loader */}
          <ImageLoader isLoading={!imageLoaded} />
          {/* Ambient blurred backdrop so any subtle aspect difference has a dreamy romantic glow */}
          <img
            src={photo.src}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover blur-lg opacity-25 scale-110 pointer-events-none transition-opacity duration-500 ${imageLoaded ? 'opacity-25' : 'opacity-0'}`}
          />
          {/* Main image: object-contain ensures 100% of the width and height fits without ANY cropping */}
          <img
            src={photo.src}
            alt={photo.caption}
            onLoad={(e) => {
              setImageLoaded(true);
              const img = e.currentTarget;
              if (img.naturalHeight > img.naturalWidth * 1.15) {
                setIsPortrait(true);
              } else {
                setIsPortrait(false);
              }
            }}
            className={`relative z-10 w-full h-full object-contain group-hover:scale-105 transition-all duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        {/* Handwritten Caption at Bottom */}
        <p className="absolute bottom-3 sm:bottom-3.5 left-0 w-full text-center font-serif italic text-gray-800 text-[14.5px] sm:text-[16px] px-3 leading-tight">
          {photo.caption}
        </p>

        {/* Cute Tap Icon */}
        <span className="absolute bottom-1 right-2.5 text-[10px] text-rose-400 opacity-60 group-hover:opacity-100 transition-opacity">
          Tap me ❤️
        </span>
      </motion.div>

      {/* Location & Date Badge */}
      <div className="inline-flex items-center gap-2 mt-3 px-3.5 py-1 rounded-full bg-white/85 border border-gray-200/60 shadow-2xs text-[10.5px] font-sans tracking-widest uppercase text-gray-600 font-medium backdrop-blur-xs">
        <MapPin className="w-3 h-3 text-rose-400" />
        <span>{photo.location}</span>
        <span>•</span>
        <span>{photo.date}</span>
      </div>
    </div>
  );
}


export function NoteSlide({ index }: { index: number }) {
  const note = config.loveNotes[index];
  const [loveCount, setLoveCount] = useState(0);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleSendLove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLoveCount(c => c + 1);
    const id = Date.now();
    setHearts(prev => [
      ...prev.slice(-4),
      { id, x: -20 + Math.random() * 40, y: -25 - Math.random() * 25 },
    ]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== id));
    }, 1000);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-3 py-4 select-none">
      {/* Wax-Sealed Stationery Love Letter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[335px] sm:max-w-[360px] bg-white/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-rose-100/90 shadow-[0_15px_40px_-15px_rgba(225,29,72,0.15)] relative space-y-3.5 text-center pointer-events-auto"
      >
        {/* Top Love Note Header */}
        <div className="flex items-center justify-between border-b border-rose-100/80 pb-2.5 mb-1">
          <span className="text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-rose-500">
            REASON #0{index + 1}
          </span>
          <span className="text-[10px] font-sans tracking-wide bg-rose-50 text-rose-700 px-2.5 py-0.5 rounded-full font-semibold border border-rose-200/50">
            {note.badge || "Pure Love"}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl sm:text-3xl text-gray-900 font-semibold tracking-tight">
          {note.title}
        </h3>

        {/* Note Body */}
        <p className="font-serif text-[15.5px] sm:text-[17px] text-gray-700 leading-relaxed px-1 font-normal italic">
          "{note.text}"
        </p>

        {/* Interactive Send Love Button */}
        <div className="pt-2 flex flex-col items-center justify-center relative">
          <AnimatePresence>
            {hearts.map(h => (
              <motion.span
                key={h.id}
                initial={{ opacity: 1, scale: 0.4, x: 0, y: 0 }}
                animate={{ opacity: 0, scale: 1.3, x: h.x, y: h.y }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute text-xl pointer-events-none filter drop-shadow-xs"
              >
                💕
              </motion.span>
            ))}
          </AnimatePresence>

          <button
            onClick={handleSendLove}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 hover:bg-rose-100/80 border border-rose-200/70 text-rose-700 text-xs font-sans font-medium tracking-wide active:scale-95 transition-all shadow-2xs cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Send Love {loveCount > 0 ? `(${loveCount})` : ''}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export function RiddleSlide({ index, onUnlock, onNext, savedAnswer, onSolve }: { index: number; onUnlock: () => void; onNext: () => void; key?: string | number; savedAnswer?: string | null; onSolve?: (riddleIndex: number, answer: string) => void }) {
  const riddle = config.riddles[index];
  const isFinal = !!(riddle as any).isFinal;
  const closingMessage = (riddle as any).closingMessage as string | undefined;
  const alreadySolved = !!savedAnswer;
  const [selected, setSelected] = useState<string | null>(alreadySolved ? savedAnswer : null);
  const [answered, setAnswered] = useState(alreadySolved);
  const [showClosing, setShowClosing] = useState(false);
  const [catSparks, setCatSparks] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hasAdvancedRef = useRef(false);

  const onNextRef = useRef(onNext);
  const onUnlockRef = useRef(onUnlock);
  useEffect(() => {
    onNextRef.current = onNext;
    onUnlockRef.current = onUnlock;
  });

  // Always cleanup pending timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  const safeAdvance = () => {
    if (hasAdvancedRef.current) return;
    hasAdvancedRef.current = true;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    onNextRef.current();
  };

  const handleGuess = (opt: string) => {
    if (answered) {
      if (!isFinal || showClosing) {
        safeAdvance();
      }
      return;
    }
    setSelected(opt);
    setAnswered(true);
    onUnlockRef.current();
    if (onSolve) onSolve(index, opt);

    if (isFinal) {
      // For the final question: pause, then show closing message
      timerRef.current = setTimeout(() => {
        setShowClosing(true);
        setCatSparks(true);
        // Auto-advance after showing closing message
        timerRef.current = setTimeout(() => {
          safeAdvance();
        }, 5000);
      }, 2500);
    } else {
      setCatSparks(true);
      timerRef.current = setTimeout(() => {
        safeAdvance();
      }, 1200);
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center px-3 relative select-none pointer-events-auto"
      onClick={(e) => {
        if (answered && (!isFinal || showClosing)) {
          e.stopPropagation();
          safeAdvance();
        }
      }}
    >
      {/* Floating celebratory sunflowers & sparkles when correct */}
      <AnimatePresence>
        {catSparks && (
          <div className="absolute -top-12 inset-x-0 flex justify-center items-center space-x-3 pointer-events-none z-40 select-none">
            {['/assets/sunflower1.png', '/assets/sunflower2.png', '/assets/sunflower3.png'].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.3, y: 15 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.25, 0.85],
                  y: [15, -25 - (i % 2) * 15, -45],
                  x: (i - 1) * 28,
                  rotate: [0, (i - 1) * 15],
                }}
                transition={{ duration: 1.1, ease: 'easeOut', delay: i * 0.1 }}
                className="w-9 h-9 flex items-center justify-center filter drop-shadow-sm"
              >
                <img src={img} alt="Sunflower celebrate" className="w-full h-full object-contain" />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Riddle Header Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-50 border border-amber-200/80 text-[9.5px] sm:text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-amber-800 mb-3.5">
        <span>🌻</span>
        <span>{index + 1 < 10 ? `0${index + 1}` : index + 1} OF 10 • TAKE YOUR TIME</span>
      </div>

      <p className="font-serif text-xl sm:text-2xl text-center text-gray-900 mb-8 leading-snug px-2 font-medium">
        "{riddle.question}"
      </p>

      {/* Options List */}
      <div className="space-y-2.5 w-full max-w-[310px] mb-6">
        {riddle.options.map(opt => {
          const isSelected = selected === opt;
          const isChosen = answered && isSelected;
          const isOther = answered && !isSelected;

          return (
            <button
              key={opt}
              onClick={(e) => { e.stopPropagation(); handleGuess(opt); }}
              className={`pointer-events-auto relative z-30 w-full text-left px-4 py-3.5 rounded-2xl font-sans text-sm tracking-wide transition-all duration-300 border flex items-center justify-between cursor-pointer ${isChosen
                ? "bg-[#FFF4F4] border-red-300 text-red-900 shadow-md scale-[1.02] ring-2 ring-red-200"
                : isOther
                  ? "bg-gray-50/70 border-gray-200 text-gray-400 opacity-60"
                  : "bg-white/90 border-rose-100/80 text-gray-700 backdrop-blur-sm shadow-xs hover:shadow-md hover:border-rose-200 active:scale-[0.98]"
                }`}
              disabled={answered && !isChosen}
            >
              <span className="font-medium">{opt}</span>
              {isChosen && (
                <img src="/assets/sunflower1.png" alt="Selected" className="w-5 h-5 object-contain inline-block animate-bounce" />
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback / Closing Message */}
      <div className="h-20 flex flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          {isFinal && showClosing && closingMessage ? (
            <motion.div
              key="closing"
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              {closingMessage.split('\n').map((line, i) => (
                <p key={i} className="font-serif text-[15px] sm:text-[17px] text-center italic text-gray-700 font-medium leading-relaxed">
                  {line}
                </p>
              ))}
            </motion.div>
          ) : answered && !isFinal && riddle.successMessage ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <p className="font-serif text-[16px] sm:text-[17px] text-center italic text-red-700 font-medium">
                {riddle.successMessage}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function HugSlide({ onUnlock, onNext }: { onUnlock: () => void, onNext: () => void }) {
  const [step, setStep] = useState(0);
  const [squeezeCount, setSqueezeCount] = useState(0);
  const [hugHearts, setHugHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const advance = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (step < 3) {
      setStep(prev => prev + 1);
      if (step === 2) {
        onUnlock();
      }
    } else {
      onNext();
    }
  };

  const handleSqueeze = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSqueezeCount(c => c + 1);
    const id = Date.now();
    setHugHearts(prev => [
      ...prev.slice(-5),
      { id, x: -30 + Math.random() * 60, y: -30 - Math.random() * 30 },
    ]);
    setTimeout(() => {
      setHugHearts(prev => prev.filter(h => h.id !== id));
    }, 1100);
  };

  return (
    <div className="w-full flex flex-col items-center px-4 text-center select-none">
      {/* Question */}
      <p className="font-serif text-2xl sm:text-3xl text-gray-900 mb-8 tracking-tight">
        What would I give you right now?
      </p>

      {step === 0 && (
        <div className="flex flex-col items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={advance}
            className="pointer-events-auto relative z-30 group inline-flex items-center justify-center p-[2px] rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 shadow-[0_12px_32px_-8px_rgba(244,63,94,0.45)] hover:shadow-[0_16px_36px_-6px_rgba(244,63,94,0.65)] transition-all duration-300 cursor-pointer"
          >
            <div className="relative px-8 py-3.5 rounded-full bg-white/95 hover:bg-white transition-colors flex items-center gap-2.5 overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-rose-200/50 to-transparent skew-x-12 pointer-events-none"
              />
              <Sparkles className="w-4 h-4 text-rose-500 animate-pulse" />
              <span className="font-serif text-[16px] sm:text-[17px] font-semibold text-gray-900 tracking-wide">
                Take a Guess
              </span>
              <span className="text-base group-hover:scale-125 transition-transform duration-300">
                ❤️
              </span>
            </div>
          </motion.button>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.4 }}
            className="mt-3 text-[11px] font-sans tracking-wide text-rose-500/90 font-medium"
          >
            ✨ Bet you can't guess what it is 🤭
          </motion.span>
        </div>
      )}

      {step >= 1 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-1.5 mb-6">
          <p className="font-serif text-xl text-gray-700">An explanation?</p>
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-red-500 font-bold">No.</p>
        </motion.div>
      )}

      {step >= 2 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-1.5 mb-6">
          <p className="font-serif text-xl text-gray-700">A gift?</p>
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-red-500 font-bold">Not nearly enough.</p>
        </motion.div>
      )}

      {step >= 3 && (
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} className="space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 font-semibold">
            A really, really long hug.
          </h2>

          {/* Pulsing Intertwined Hearts */}
          <div className="relative flex justify-center items-center h-16">
            <AnimatePresence>
              {hugHearts.map(h => (
                <motion.span
                  key={h.id}
                  initial={{ opacity: 1, scale: 0.4, x: 0, y: 0 }}
                  animate={{ opacity: 0, scale: 1.4, x: h.x, y: h.y }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute text-2xl pointer-events-none filter drop-shadow-xs"
                >
                  💖
                </motion.span>
              ))}
            </AnimatePresence>

            <motion.div
              initial={{ x: -35, opacity: 0 }}
              animate={{ x: -6, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Heart className="w-8 h-8 text-rose-300 fill-rose-300" />
            </motion.div>
            <motion.div
              initial={{ x: 35, opacity: 0 }}
              animate={{ x: 6, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Heart className="w-9 h-9 text-rose-600 fill-rose-600 animate-pulse" />
            </motion.div>
          </div>

          <p className="font-serif text-[15.5px] sm:text-[17px] text-gray-700 italic px-2 leading-relaxed max-w-[320px] mx-auto">
            The kind where neither of us has to say a single word. Where the whole world goes completely quiet, and it's just you in my arms.
          </p>

          {/* Interactive Squeeze Button & Continue Button */}
          <div className="pt-2 flex flex-col items-center gap-2.5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSqueeze}
              className="pointer-events-auto px-6 py-2 rounded-full bg-rose-50 hover:bg-rose-100 border border-rose-200/80 text-rose-700 text-xs font-sans font-medium tracking-wide transition-all shadow-xs cursor-pointer inline-flex items-center gap-2"
            >
              <span className="text-base">🤗</span>
              <span>Squeeze Tighter {squeezeCount > 0 ? `(${squeezeCount})` : ''}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={advance}
              className="pointer-events-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-sans text-xs font-semibold tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group"
            >
              <span>Continue into our story</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              <span>🌻</span>
            </motion.button>
          </div>
        </motion.div>
      )}

      {step > 0 && step < 3 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={advance}
          className="pointer-events-auto relative z-30 group inline-flex items-center gap-2 px-7 py-3 mt-4 rounded-full bg-gradient-to-r from-[#D92658] via-[#E11D48] to-[#FB7185] text-white font-sans text-xs uppercase tracking-[0.2em] font-bold shadow-[0_10px_25px_-6px_rgba(225,29,72,0.45)] hover:shadow-[0_14px_30px_-5px_rgba(225,29,72,0.6)] transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-200 animate-pulse" />
          <span>{step === 1 ? "Guess Again" : "Reveal The Truth"}</span>
          <ArrowRight className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      )}
    </div>
  );
}

export function SituationalSlide({ index }: { index: number }) {
  const situation = config.situations?.[index];
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number; emoji: string }[]>([]);
  const [reactions, setReactions] = useState(0);
  const [situationImageLoaded, setSituationImageLoaded] = useState(false);

  useEffect(() => {
    setSituationImageLoaded(false);
  }, [index, situation?.photo]);

  if (!situation) return null;

  const handlePhotoTap = (e: React.MouseEvent) => {
    e.stopPropagation();
    const id = Date.now();
    const emojis = ['💖', '✨', '🌻', '🥰', '🥺', '❤️', '🌸', '💕'];
    setHearts(prev => [
      ...prev.slice(-5),
      {
        id,
        x: -25 + Math.random() * 50,
        y: -35 - Math.random() * 25,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      },
    ]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== id));
    }, 1100);
  };

  const handleReactionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setReactions(c => c + 1);
    handlePhotoTap(e);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-1 py-1 select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[355px] sm:max-w-[385px] bg-white/94 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-rose-100/90 shadow-[0_18px_45px_-12px_rgba(225,29,72,0.18)] flex flex-col items-center pointer-events-auto relative text-center"
      >
        {/* Top Situation Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-rose-50 border border-rose-200/80 text-[9px] sm:text-[9.5px] font-sans tracking-[0.18em] uppercase font-bold text-rose-700 mb-1 shadow-2xs">
          <Sparkles className="w-2.5 h-2.5 text-rose-500" />
          <span>{situation.badge}</span>
        </div>

        {/* Catchy Relatable Title */}
        <h3 className="font-serif text-[16.5px] sm:text-[18px] font-semibold text-gray-900 leading-tight mb-1.5 px-1">
          "{situation.title}"
        </h3>

        {/* Interactive Photo Frame - Enlarged width and length */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={handlePhotoTap}
          className="w-full h-56 sm:h-64 rounded-xl overflow-hidden shadow-md border-2 border-white relative group cursor-pointer bg-rose-50/50 flex items-center justify-center"
        >
          {/* Subtle Washi Tape Accent */}
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-18 h-4 bg-amber-100/85 border-b border-amber-200/50 shadow-2xs rotate-1 z-20 backdrop-blur-xs rounded-xs pointer-events-none" />

          {/* Floating Emojis / Hearts on Photo Tap */}
          <AnimatePresence>
            {hearts.map(h => (
              <motion.span
                key={h.id}
                initial={{ opacity: 1, scale: 0.4, x: 0, y: 0 }}
                animate={{ opacity: 0, scale: 1.4, x: h.x, y: h.y }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-2xl z-30 filter drop-shadow-xs"
              >
                {h.emoji}
              </motion.span>
            ))}
          </AnimatePresence>

          {situation.banner || !situation.photo ? (
            /* Banner Card instead of Photo */
            <div className="relative z-10 w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-rose-50/95 via-[#FFF6F6] to-pink-50/90 space-y-3 select-none">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-rose-100 flex items-center justify-center text-2xl filter drop-shadow-2xs">
                🤍
              </div>
              <p className="font-serif italic text-gray-800 text-[15px] sm:text-[16.5px] leading-relaxed max-w-[290px] px-2 font-medium">
                "{situation.banner || "no pic bc i don't like ur pics to get captured, only happy faces of ur in my heart"}"
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50/90 border border-rose-200/70 shadow-2xs">
                <span className="text-[10px] sm:text-[10.5px] font-sans tracking-wider text-rose-700 font-semibold">
                  Kept in my heart forever ✨
                </span>
              </div>
            </div>
          ) : (
            <>
              {/* Image Loader */}
              <ImageLoader isLoading={!situationImageLoaded} />
              {/* Ambient Blurred Backdrop */}
              <img
                src={situation.photo}
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 w-full h-full object-cover blur-lg scale-110 pointer-events-none transition-opacity duration-500 ${situationImageLoaded ? 'opacity-30' : 'opacity-0'}`}
              />

              {/* Individual Photo - Fits completely without cropping */}
              <img
                src={situation.photo}
                alt={situation.caption || situation.title}
                onLoad={() => setSituationImageLoaded(true)}
                className={`relative z-10 w-full h-full object-contain group-hover:scale-105 transition-all duration-700 ease-out ${situationImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />

              {/* Photo Bottom Caption Gradient Strip */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 pt-5 flex items-end justify-between pointer-events-none z-20">
                <span className="text-[10.5px] font-serif italic text-white/95 truncate drop-shadow-xs max-w-[70%]">
                  {situation.caption}
                </span>
                <span className="text-[9px] font-sans text-rose-200 font-medium px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-xs border border-white/20">
                  Tap her ❤️
                </span>
              </div>
            </>
          )}
        </motion.div>

        {/* The Scene & The Truth Card */}
        <div className="w-full bg-gradient-to-b from-rose-50/70 to-pink-50/40 rounded-xl p-2.5 sm:p-3 border border-rose-100/70 mt-2 space-y-1.5 text-left">
          <p className="text-[11.5px] sm:text-[12px] font-serif text-gray-700 leading-snug italic">
            <span className="font-sans font-semibold text-rose-800 not-italic text-[10px] tracking-wider uppercase mr-1">The Scene:</span>
            "{situation.situation}"
          </p>

          <div className="bg-white/80 rounded-lg p-2 border border-rose-100/60">
            <p className="text-[11px] sm:text-[11.5px] font-sans text-rose-950 font-medium leading-snug">
              <span className="text-rose-600 font-bold mr-1">My Heart:</span>
              {situation.reality}
            </p>
          </div>
        </div>

        {/* Meter / Vibe Bar */}
        <div className="w-full flex items-center justify-between text-[9.5px] sm:text-[10px] font-sans bg-white/80 border border-rose-100/80 rounded-lg px-2.5 py-1 text-gray-600 mt-1.5 shadow-2xs">
          <span className="font-medium text-gray-500">{situation.meter.label}</span>
          <span className="font-semibold text-rose-700">{situation.meter.value}</span>
        </div>

        {/* Bottom Inside Joke & Interactive Reaction Button */}
        <div className="w-full mt-2 flex items-center justify-between gap-1.5">
          <span className="text-[9.5px] sm:text-[10px] font-sans text-rose-800 bg-rose-100/80 border border-rose-200/50 px-2.5 py-1 rounded-full font-medium truncate max-w-[50%] shadow-2xs" title={situation.insideJoke}>
            {situation.insideJoke}
          </span>

          <button
            onClick={handleReactionClick}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] sm:text-[10.5px] font-sans font-medium shadow-xs hover:shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer select-none shrink-0"
          >
            <span>{situation.reactionLabel}</span>
            {reactions > 0 && (
              <span className="bg-white/25 px-1 rounded-full text-[9px] font-bold">
                +{reactions}
              </span>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export function PromiseSlide({ onUnlock, onNext }: { onUnlock: () => void; onNext: () => void }) {
  const [promised, setPromised] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; emoji: string; scale: number; rotation: number }[]>([]);
  const [pulseCount, setPulseCount] = useState(0);

  const triggerCelebration = () => {
    const emojis = ['💖', '🌻', '✨', '🤞', '🤍', '🌸', '💫', '🫂', '🕊️'];
    const newParticles = Array.from({ length: 24 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 260,
      y: -60 - Math.random() * 180,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      scale: 0.8 + Math.random() * 0.7,
      rotation: (Math.random() - 0.5) * 60,
    }));
    setParticles(prev => [...prev.slice(-12), ...newParticles]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.some(np => np.id === p.id)));
    }, 1800);
  };

  const handleMakePromise = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!promised) {
      setPromised(true);
      onUnlock();
    }
    setPulseCount(c => c + 1);
    triggerCelebration();
  };

  const handleContinue = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNext();
  };

  return (
    <div className="w-full flex flex-col items-center px-3 sm:px-4 text-center select-none relative">
      {/* Floating Particles Burst */}
      <AnimatePresence>
        {particles.map(p => (
          <motion.span
            key={p.id}
            initial={{ opacity: 1, scale: 0.3, x: 0, y: 0, rotate: 0 }}
            animate={{ opacity: 0, scale: p.scale, x: p.x, y: p.y, rotate: p.rotation }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute text-2xl sm:text-3xl pointer-events-none z-50 filter drop-shadow-md select-none"
            style={{ top: '45%', left: '50%' }}
          >
            {p.emoji}
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Top Floating Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50/90 border border-rose-200/80 shadow-xs mb-3 backdrop-blur-md"
      >
        <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
        <span className="text-[10px] font-sans tracking-[0.22em] uppercase font-bold text-rose-700">
          {promised ? "Promise Sealed Forever 🔐" : "Our Sacred Promise • Pinky Swear 🤞"}
        </span>
        <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
      </motion.div>

      {/* Main Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[340px] sm:max-w-[365px] bg-white/85 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-rose-100/90 shadow-[0_12px_36px_-12px_rgba(225,29,72,0.16)] relative flex flex-col items-center"
      >
        {!promised ? (
          /* UNSEALED STATE */
          <div className="flex flex-col items-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-pink-600 to-amber-600 leading-tight"
            >
              Keep this promise with me?
            </motion.h2>

            <p className="font-serif text-[15.5px] sm:text-[17px] text-gray-700 leading-relaxed font-normal px-1">
              Whenever life feels too heavy or quiet, don't face it all alone. Tap below to seal your word.
            </p>

            {/* Glowing Pinky Promise Emblem with Ripple Animations */}
            <div className="relative my-2">
              <motion.div
                animate={{
                  scale: [1, 1.28, 1],
                  opacity: [0.35, 0.08, 0.35],
                }}
                transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 blur-md pointer-events-none"
              />
              <motion.div
                animate={{
                  rotate: [-3, 3, -3],
                  scale: [1, 1.05, 1],
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                onClick={handleMakePromise}
                className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-rose-100 via-pink-50 to-amber-100 border-2 border-rose-200/90 shadow-inner flex items-center justify-center text-4xl cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                title="Tap to seal"
              >
                <span className="select-none filter drop-shadow-sm">🤞</span>
              </motion.div>
            </div>

            {/* Animated Interactive Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.94 }}
              onClick={handleMakePromise}
              className="pointer-events-auto relative z-30 group inline-flex items-center justify-center p-[2px] rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 shadow-[0_10px_28px_-6px_rgba(244,63,94,0.5)] hover:shadow-[0_14px_34px_-4px_rgba(244,63,94,0.7)] transition-all duration-300 cursor-pointer"
            >
              <div className="relative px-7 py-3 rounded-full bg-white/95 group-hover:bg-white transition-colors flex items-center gap-2.5 overflow-hidden">
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-rose-300/40 to-transparent skew-x-12 pointer-events-none"
                />
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
                <span className="font-serif text-[15.5px] sm:text-[16.5px] font-semibold text-gray-900 tracking-wide">
                  I Promise You 🤍
                </span>
                <span className="text-base group-hover:scale-125 transition-transform duration-300">
                  🤞
                </span>
              </div>
            </motion.button>

            <motion.span
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[11px] font-sans tracking-wide text-rose-500/90 font-medium"
            >
              ✨ Tap to seal it in our hearts forever ✨
            </motion.span>
          </div>
        ) : (
          /* SEALED PROMISE STATE */
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-4"
          >
            {/* Sealed Emblem */}
            <motion.div
              initial={{ rotate: -25, scale: 0.6 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 14 }}
              onClick={handleMakePromise}
              className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 p-[3px] shadow-[0_10px_30px_rgba(244,63,94,0.45)] cursor-pointer"
              title="Tap for more sparkles!"
            >
              <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                <motion.span
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-3xl"
                >
                  🔐
                </motion.span>
              </div>
            </motion.div>

            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-red-600 to-pink-600">
                Promise Sealed.
              </h2>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-rose-600">
                Etched in my heart forever 🤍
              </p>
            </div>

            <p className="font-serif text-[15px] sm:text-[16.5px] text-gray-700 leading-relaxed font-normal px-2">
              No matter the distance, no matter how many years pass by...
              I will always answer your call. You never have to worry.
            </p>

            {/* Reassurance Badge */}
            <div className="w-full bg-rose-50/90 border border-rose-200/80 rounded-xl p-2.5 flex items-center justify-center gap-2 shadow-2xs">
              <PhoneCall className="w-4 h-4 text-rose-500 shrink-0" />
              <span className="font-sans text-[12px] sm:text-[12.5px] font-medium text-rose-800">
                Always just a phone call away 🫂
              </span>
            </div>

            {/* Sparkle More Button + Continue Button */}
            <div className="pt-2 flex flex-col items-center gap-2.5 w-full">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleMakePromise}
                className="pointer-events-auto px-5 py-1.5 rounded-full bg-rose-50 hover:bg-rose-100 border border-rose-200/80 text-rose-700 text-xs font-sans font-medium tracking-wide transition-all shadow-2xs cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>✨ Send more love {pulseCount > 1 ? `(${pulseCount})` : ''}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContinue}
                className="pointer-events-auto w-full max-w-[240px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-sans text-xs font-semibold tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>Continue to Finale</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export function CreationSlide({
  content,
  image,
  onNext,
  clickCount = 0,
}: {
  content?: string;
  image?: string;
  onNext?: () => void;
  clickCount?: number;
}) {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [creationImageLoaded, setCreationImageLoaded] = useState(false);

  useEffect(() => {
    setCreationImageLoaded(false);
  }, [image]);

  const handleTap = (e: React.MouseEvent) => {
    e.stopPropagation();
    const id = Date.now();
    setHearts(prev => [
      ...prev.slice(-6),
      { id, x: -20 + Math.random() * 40, y: -20 - Math.random() * 30 },
    ]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== id));
    }, 1200);

    if (onNext) {
      onNext();
    }
  };

  return (
    <div
      className="relative w-full h-full min-h-[500px] sm:min-h-[600px] flex flex-col items-center justify-center overflow-hidden select-none cursor-pointer"
      onClick={handleTap}
    >
      {/* Image Loader */}
      <ImageLoader isLoading={!creationImageLoaded} isDark />

      {/* Blurred background ambient image for complete coverage */}
      <img
        src={image || "/assets/my_creation.png"}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover filter blur-xl scale-110 pointer-events-none transition-opacity duration-500 ${creationImageLoaded ? 'opacity-60' : 'opacity-0'}`}
      />

      {/* Crisp Foreground Full-Screen Image */}
      <motion.img
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: creationImageLoaded ? 1 : 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        src={image || "/assets/my_creation.png"}
        alt="My Creation"
        onLoad={() => setCreationImageLoaded(true)}
        className="relative z-10 w-full h-full max-h-[850px] object-contain pointer-events-none drop-shadow-2xl"
      />

      {/* Floating Hearts on Tap */}
      <AnimatePresence>
        {hearts.map(h => (
          <motion.span
            key={h.id}
            initial={{ opacity: 1, scale: 0.4, x: 0, y: 0 }}
            animate={{ opacity: 0, scale: 1.4, x: h.x, y: h.y }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute z-30 text-3xl pointer-events-none filter drop-shadow-md select-none"
            style={{ top: '50%', left: '50%' }}
          >
            ❤️
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Toast Prompt after 1st click */}
      <AnimatePresence>
        {clickCount === 1 && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="absolute top-10 inset-x-0 z-30 flex justify-center pointer-events-none px-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[12px] font-sans font-medium shadow-xl">
              <span>Click once more to start over</span>
              <span className="text-base animate-bounce">🔄</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transparent Text Banner at the Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-16 sm:bottom-18 inset-x-3 sm:inset-x-5 z-20 flex justify-center pointer-events-auto"
      >
        <div className="w-full max-w-[360px] bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-[0_12px_36px_rgba(0,0,0,0.5)] text-center">
          <p className="font-serif text-[15px] sm:text-[16.5px] text-white/95 font-medium tracking-wide drop-shadow-md leading-snug">
            {content || "I noticed, I wish u keep it with u forever"}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function ThingsNeverKnewSlide({
  onUnlock,
  onNext,
}: {
  onUnlock?: () => void;
  onNext?: () => void;
}) {
  const confessions = [
    {
      num: "01",
      text: "There were days I checked my phone hoping it was you.",
    },
    {
      num: "02",
      text: "There were songs I stopped listening to because they sounded too much like you.",
    },
    {
      num: "03",
      text: "There were places I wanted to take you but never got the chance.",
    },
    {
      num: "04",
      text: "There were things that happened in my day that I automatically wanted to tell you.",
    },
    {
      num: "05",
      text: "Sometimes I saw something beautiful and my first thought was,\n“She would probably like this.”",
    },
  ];

  const [step, setStep] = useState(0);
  const [blackoutFinished, setBlackoutFinished] = useState(false);
  const [sunflowerAppeared, setSunflowerAppeared] = useState(false);

  // Blackout timer for 2.5s before revealing "So I kept loving you quietly."
  useEffect(() => {
    if (step === 6) {
      setBlackoutFinished(false);
      const timer = setTimeout(() => {
        setBlackoutFinished(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // Sunflower appearance in step 7 unlocks slide navigation
  useEffect(() => {
    if (step === 7) {
      const timer = setTimeout(() => {
        setSunflowerAppeared(true);
        onUnlock?.();
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [step, onUnlock]);

  const handleTap = () => {
    if (step < 5) {
      setStep(prev => prev + 1);
    } else if (step === 5) {
      setStep(6);
    }
  };

  return (
    <div
      onClick={handleTap}
      className={`relative w-full h-full min-h-[560px] sm:min-h-[640px] max-w-[380px] flex flex-col justify-between items-center text-center p-6 sm:p-8 bg-black transition-colors duration-1000 select-none pointer-events-auto ${step < 6 ? 'cursor-pointer' : ''
        }`}
    >
      {/* Top subtle header - hidden during pitch blackout and birthday message */}
      <div className="w-full pt-2 sm:pt-4 transition-opacity duration-700">
        <motion.p
          animate={{ opacity: step === 6 && !blackoutFinished ? 0 : 1 }}
          className="font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.28em] text-neutral-400 font-medium"
        >
          {step === 7 ? "🌙 on this day" : "There are things you never knew."}
        </motion.p>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-center py-6">
        <AnimatePresence mode="wait">
          {/* Confessions 01 to 05 */}
          {step < 5 && (
            <motion.div
              key={`confession-${step}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-4 px-2"
            >
              <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-neutral-400 font-semibold">
                {confessions[step].num}
              </span>
              <p className="font-serif text-[17.5px] sm:text-[19.5px] text-neutral-100 leading-relaxed font-normal whitespace-pre-line max-w-[310px]">
                {confessions[step].text}
              </p>
            </motion.div>
          )}

          {/* Step 5: Final slower confession */}
          {step === 5 && (
            <motion.div
              key="final-confession"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-4 px-3"
            >
              <p className="font-serif text-[17.5px] sm:text-[19.5px] text-neutral-100 leading-relaxed font-normal max-w-[320px]">
                And there were so many times I wanted to tell you how much you meant to me...
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.5 }}
                className="font-serif text-[15px] sm:text-[16.5px] text-neutral-300 italic leading-relaxed font-light max-w-[300px]"
              >
                but I was afraid that knowing would make you uncomfortable.
              </motion.p>
            </motion.div>
          )}

          {/* Step 6: Blackout and then "So I kept loving you quietly." */}
          {step === 6 && (
            <div key="blackout-container" className="flex flex-col items-center justify-center">
              {blackoutFinished && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                  className="flex flex-col items-center justify-center space-y-7"
                >
                  <p className="font-serif text-[20px] sm:text-[23px] text-neutral-100 font-normal tracking-wide italic">
                    So I kept loving you quietly.
                  </p>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setStep(7);
                    }}
                    className="pointer-events-auto px-5 py-2 rounded-full border border-neutral-700/80 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white font-mono text-[11px] tracking-[0.2em] uppercase transition-all cursor-pointer flex items-center gap-2 shadow-sm group"
                  >
                    <span>continue</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </motion.button>
                </motion.div>
              )}
            </div>
          )}

          {/* Step 7: The Unconditional Birthday Wish + Sunflower */}
          {step === 7 && (
            <motion.div
              key="birthday-wish"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-4 px-2 max-w-[340px]"
            >
              <p className="font-serif text-[16px] sm:text-[17.5px] text-neutral-200 leading-relaxed font-normal">
                And today, on your birthday,<br />
                I'm not asking you for anything.
              </p>

              <div className="space-y-1 text-[13px] sm:text-[14px] font-sans text-neutral-400 tracking-wide font-light">
                <p>Not an answer.</p>
                <p>Not a promise.</p>
                <p>Not even a place in your life.</p>
              </div>

              <div className="pt-2 space-y-1">
                <p className="font-serif text-[18px] sm:text-[20px] text-neutral-100 font-medium">
                  Just be happy.
                </p>
                <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light italic">
                  That's the only thing I still want for you.
                </p>
              </div>

              {/* Tiny sunflower 🌻 slowly appearing */}
              <AnimatePresence>
                {sunflowerAppeared && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="pt-2 flex flex-col items-center gap-2 select-none"
                  >
                    <span className="text-3xl sm:text-4xl filter drop-shadow-[0_0_18px_rgba(234,179,8,0.5)] animate-pulse">
                      🌻
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Proceed to One Last Gift button */}
              {sunflowerAppeared && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="pt-3"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNext?.();
                    }}
                    className="pointer-events-auto px-5 py-2 rounded-full border border-neutral-700 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white font-sans text-xs tracking-wider transition-all cursor-pointer inline-flex items-center gap-2 shadow-md group"
                  >
                    <span>One Last Gift</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-amber-400" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom status / tap hint */}
      <div className="w-full pb-2 transition-opacity duration-500">
        {step < 5 && (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5">
              {confessions.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === step ? 'bg-neutral-300 w-3' : i < step ? 'bg-neutral-600' : 'bg-neutral-800'
                    }`}
                />
              ))}
            </div>
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              tap screen
            </span>
          </div>
        )}
        {step === 5 && (
          <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase animate-pulse">
            tap to continue
          </span>
        )}
      </div>
    </div>
  );
}

export function ReturnGiftSlide({
  onUnlock,
  onNext,
}: {
  onUnlock?: () => void;
  onNext?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [giftStep, setGiftStep] = useState(0);
  const [isDissolved, setIsDissolved] = useState(false);
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleOpen = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!isOpen) {
      setIsOpen(true);
      setGiftStep(1);
      const newSparkles = Array.from({ length: 12 }).map((_, i) => ({
        id: Date.now() + i,
        x: -35 + Math.random() * 70,
        y: -30 - Math.random() * 50,
      }));
      setSparkles(newSparkles);
      setTimeout(() => setSparkles([]), 1400);
    }
  };

  const handleStepForward = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (giftStep === 1) {
      setGiftStep(2);
    } else if (giftStep === 2) {
      setGiftStep(3);
    } else if (giftStep === 3) {
      setGiftStep(4);
      setIsDissolved(true);
      onUnlock?.();
    }
  };

  return (
    <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] max-w-[380px] flex flex-col justify-between items-center text-center p-5 sm:p-7 bg-black select-none pointer-events-auto">
      {/* Top Title Tag */}
      <div className="w-full pt-1 sm:pt-3">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 shadow-xs"
        >
          <span className="text-[10px]">🎁</span>
          <span className="font-mono text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.24em] text-neutral-300 font-medium">
            If I Could Give You One Last Gift
          </span>
        </motion.div>
      </div>

      {/* Center 3D Box & Content Container */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-center py-4">
        {/* 3D Gift Box Stage (Dissolves in step 4) */}
        {!isDissolved && (
          <div className="relative flex flex-col items-center justify-center my-2">
            <div
              className="relative w-40 h-36 flex items-center justify-center cursor-pointer"
              style={{ perspective: '800px' }}
              onClick={() => {
                if (!isOpen) handleOpen();
              }}
            >
              {/* Floating Sparkles on Box Open */}
              <AnimatePresence>
                {sparkles.map(s => (
                  <motion.span
                    key={s.id}
                    initial={{ opacity: 1, scale: 0.3, x: 0, y: 0 }}
                    animate={{ opacity: 0, scale: 1.4, x: s.x, y: s.y }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute z-40 text-sm pointer-events-none filter drop-shadow-md"
                  >
                    ✨
                  </motion.span>
                ))}
              </AnimatePresence>

              {/* 3D Cube Assembly */}
              <motion.div
                animate={
                  isOpen
                    ? { rotateX: -26, rotateY: 34, y: 8 }
                    : {
                      rotateX: [-16, -22, -16],
                      rotateY: [28, 38, 28],
                      y: [0, -5, 0],
                    }
                }
                transition={
                  isOpen
                    ? { duration: 0.8, ease: "easeOut" }
                    : { repeat: Infinity, duration: 6, ease: "easeInOut" }
                }
                style={{ transformStyle: 'preserve-3d' }}
                className="relative w-28 h-24"
              >
                {/* 3D Box Base: Front Face */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-[#251f33] via-[#1a1626] to-[#0f0d17] border border-amber-500/25 rounded-sm flex items-center justify-center shadow-lg"
                  style={{ transform: 'translateZ(56px)' }}
                >
                  <div className="absolute inset-y-0 w-4 bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600 shadow-[0_0_10px_rgba(245,158,11,0.4)]" />
                </div>

                {/* Back Face */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-[#1b1726] to-[#0b0912] border border-amber-500/15"
                  style={{ transform: 'rotateY(180deg) translateZ(56px)' }}
                >
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700 opacity-60" />
                </div>

                {/* Right Face */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-[#1c1827] to-[#0e0c15] border border-amber-500/20"
                  style={{ transform: 'rotateY(90deg) translateZ(56px)' }}
                >
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 opacity-75" />
                </div>

                {/* Left Face */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-[#191524] to-[#0b0912] border border-amber-500/15"
                  style={{ transform: 'rotateY(-90deg) translateZ(56px)' }}
                >
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 opacity-50" />
                </div>

                {/* Interior Velvet Floor (visible when opened) */}
                <div
                  className="absolute inset-0 bg-neutral-950 border border-neutral-800 flex items-center justify-center"
                  style={{ transform: 'rotateX(90deg) translateZ(42px)' }}
                >
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2.5 }}
                      className="w-8 h-8 rounded-full bg-amber-500/20 filter blur-sm"
                    />
                  )}
                </div>

                {/* The 3D Lid */}
                <motion.div
                  animate={
                    isOpen
                      ? { y: -88, rotateX: -65, rotateZ: 20, opacity: 0.9 }
                      : { y: 0, rotateX: 0, rotateZ: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="absolute -top-3 -left-1.5 w-[124px] h-[30px]"
                >
                  {/* Lid Top Face */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-[#312a43] to-[#1e192a] border border-amber-400/40 rounded-sm shadow-md"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    {/* Cross Ribbons on Lid */}
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-4 bg-gradient-to-b from-amber-600 via-amber-300 to-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />

                    {/* Golden Ribbon Bow Knot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                      <span className="text-xl filter drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]">
                        🎀
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Tap Open Action Prompt if not yet opened */}
            {!isOpen && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleOpen()}
                className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-neutral-950 font-sans text-xs font-semibold tracking-wider shadow-[0_4px_18px_rgba(234,179,8,0.35)] cursor-pointer hover:shadow-lg transition-all"
              >
                <span>Open Gift 🎁</span>
              </motion.button>
            )}
          </div>
        )}

        {/* Monologue Progression */}
        <AnimatePresence mode="wait">
          {/* Stage 1: Inside: nothing & Opening reflection */}
          {isOpen && giftStep === 1 && (
            <motion.div
              key="gift-step-1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="space-y-3.5 max-w-[325px] px-2"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono tracking-widest text-neutral-400">
                Inside: <span className="text-neutral-200 italic">nothing.</span>
              </div>

              <p className="font-serif text-[16px] sm:text-[17.5px] text-neutral-100 leading-relaxed font-normal">
                I spent so long wondering what I could give you.
              </p>

              <p className="font-sans text-[12.5px] sm:text-[13.5px] text-neutral-400 tracking-wider font-light leading-relaxed">
                Flowers. Memories. Letters. Time.<br />
                <span className="italic text-neutral-300">Maybe even myself.</span>
              </p>

              <div className="pt-2">
                <button
                  onClick={handleStepForward}
                  className="px-5 py-1.5 rounded-full border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 text-xs font-mono tracking-wider transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Continue</span>
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Stage 2: Freedom from expectations */}
          {isOpen && giftStep === 2 && (
            <motion.div
              key="gift-step-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 max-w-[325px] px-2"
            >
              <p className="font-serif text-[15.5px] sm:text-[17px] text-neutral-300 leading-relaxed font-normal">
                But eventually I understood...
              </p>

              <p className="font-serif text-[15px] sm:text-[16px] text-neutral-200 leading-relaxed">
                the best thing I can give you is something you've never had to ask me for.
              </p>

              <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/10 via-yellow-500/15 to-amber-500/10 border border-amber-400/30 shadow-inner">
                <p className="font-serif text-[16.5px] sm:text-[18px] text-amber-200 font-semibold tracking-wide">
                  Freedom from my expectations.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleStepForward}
                  className="px-5 py-1.5 rounded-full border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 text-xs font-mono tracking-wider transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Continue</span>
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Stage 3: The Return Gift Statement */}
          {isOpen && giftStep === 3 && (
            <motion.div
              key="gift-step-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="space-y-3.5 max-w-[335px] px-2"
            >
              <p className="font-serif text-[16px] sm:text-[17.5px] text-neutral-100 font-medium">
                So this is my return gift.
              </p>

              <p className="font-sans text-[13px] sm:text-[14px] text-neutral-300 leading-relaxed font-light">
                I am returning every expectation I ever had from you.
              </p>

              <div className="space-y-1.5 py-1 text-[13px] sm:text-[14px] font-sans text-neutral-200 font-normal">
                <p className="text-amber-200/90">Keep your freedom.</p>
                <p className="text-amber-200/90">Keep your happiness.</p>
                <p className="text-amber-200/90">Keep becoming whoever you want to become.</p>
              </div>

              <p className="font-serif text-[15px] sm:text-[16px] text-neutral-400 italic pt-1">
                And I'll keep the memories.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleStepForward}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 text-xs font-sans font-semibold tracking-wider transition-all shadow-md cursor-pointer hover:shadow-lg inline-flex items-center gap-1.5"
                >
                  <span>Raag na kore egiye chol</span>
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Stage 4: Box disappeared into Stardust & "Happy Birthday, my sunflower. 🌻" */}
          {isDissolved && (
            <motion.div
              key="gift-step-4"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-6 px-3"
            >
              <div className="relative p-6 flex flex-col items-center gap-4">
                {/* Soft glowing ambient circle */}
                <div className="absolute inset-0 rounded-full bg-amber-500/10 filter blur-2xl" />

                <span className="relative text-5xl sm:text-6xl filter drop-shadow-[0_0_24px_rgba(234,179,8,0.6)] animate-pulse">
                  🌻
                </span>

                <h2 className="relative font-serif text-2xl sm:text-3xl text-neutral-50 font-semibold tracking-tight leading-snug drop-shadow-md">
                  Happy Birthday,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200">
                    my sunflower. 🌻
                  </span>
                </h2>

                <p className="relative font-sans text-xs sm:text-sm text-neutral-400 font-light tracking-widest uppercase">
                  Always wishing for your happiness
                </p>
              </div>

              {/* Button leading to final creation slide */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.7 }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext?.();
                  }}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-neutral-800 to-neutral-900 border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 font-sans text-xs tracking-wider transition-all cursor-pointer shadow-lg inline-flex items-center gap-2 group"
                >
                  <span>The Final Piece</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom hint */}
      <div className="w-full pb-1">
        {!isOpen && (
          <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase animate-pulse">
            tap open to reveal
          </span>
        )}
      </div>
    </div>
  );
}



// =========================================================
// 2. SCRATCH PHOTO SLIDE (The Photo I Love Most)
// =========================================================
export function FlashlightSlide({
  onUnlock,
  onNext,
}: {
  onUnlock?: () => void;
  onNext?: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const clearedCellsRef = useRef<Set<string>>(new Set());

  // Initialize the scratch canvas overlay
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    // Draw rich misty twilight frosted scratch surface
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, '#1c1924');
    grad.addColorStop(0.5, '#2c253b');
    grad.addColorStop(1, '#13111a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Subtle frosted particle mist texture
    ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
    for (let i = 0; i < rect.width; i += 14) {
      for (let j = 0; j < rect.height; j += 14) {
        if ((i + j) % 28 === 0) {
          ctx.beginPath();
          ctx.arc(i, j, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Border line inside canvas
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.25)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(10, 10, rect.width - 20, rect.height - 20);

    // Center Prompt Icon & Text
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 32px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🪄', rect.width / 2, rect.height / 2 - 24);

    ctx.fillStyle = '#fef08a';
    ctx.font = '600 15px sans-serif';
    ctx.fillText('Scratch with your finger', rect.width / 2, rect.height / 2 + 14);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '12px sans-serif';
    ctx.fillText('to reveal the hidden photo ✨', rect.width / 2, rect.height / 2 + 36);
  }, []);

  const scratchAt = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';

    if (lastPointRef.current) {
      ctx.beginPath();
      ctx.lineWidth = 48 * dpr;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.moveTo(lastPointRef.current.x * dpr, lastPointRef.current.y * dpr);
      ctx.lineTo(x * dpr, y * dpr);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(x * dpr, y * dpr, 24 * dpr, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    lastPointRef.current = { x, y };

    // Track grid cell coverage
    const rect = canvas.getBoundingClientRect();
    const col = Math.floor((x / rect.width) * 16);
    const row = Math.floor((y / rect.height) * 20);
    clearedCellsRef.current.add(`${col}-${row}`);

    const totalCells = 16 * 20; // 320
    const pct = Math.min(100, Math.round((clearedCellsRef.current.size / (totalCells * 0.42)) * 100));
    setScratchPercent(pct);

    if (pct >= 85 && !isRevealed) {
      setIsRevealed(true);
      onUnlock?.();
    }
  };

  const getCoordinates = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isRevealed) return;
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch (_) {}
    setIsDrawing(true);
    const { x, y } = getCoordinates(e);
    lastPointRef.current = { x, y };
    scratchAt(x, y);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || isRevealed) return;
    const { x, y } = getCoordinates(e);
    scratchAt(x, y);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch (_) {}
    setIsDrawing(false);
    lastPointRef.current = null;
  };

  const handleManualReveal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRevealed(true);
    setScratchPercent(100);
    onUnlock?.();
  };

  return (
    <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] max-w-[380px] flex flex-col justify-between items-center text-center p-4 sm:p-6 bg-black select-none pointer-events-auto">
      {/* Top Header */}
      <div className="w-full pt-1">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 mb-2 shadow-xs"
        >
          <span className="text-[11px]">🪄</span>
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-amber-300 font-medium">
            {isRevealed ? "Photo Unlocked ✨" : `Scratch to Reveal • ${scratchPercent}%`}
          </span>
        </motion.div>
        <h3 className="font-serif text-lg sm:text-xl text-neutral-100 font-semibold tracking-tight">
          {config.flashlight?.title || "The Photo I Love Most"}
        </h3>
        <p className="text-[11.5px] text-neutral-400 font-sans mt-0.5">
          {isRevealed
            ? "My absolute favourite picture of you 🌻❤️"
            : config.flashlight?.hint || "Scratch the screen with your finger to unlock the photo 🪄✨"}
        </p>
      </div>

      {/* The Scratch Card Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[310px] aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.85)] my-auto select-none"
      >
        {/* The Photo Layer Underneath */}
        <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-between p-3.5 sm:p-4">
          <div className="relative w-full flex-1 rounded-xl overflow-hidden bg-neutral-950 border border-white/10 shadow-inner">
            <img
              src={config.flashlight?.photo || "/assets/fav_pic.png"}
              alt="The photo I love most"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Polaroid Message at bottom */}
          <div className="w-full pt-2.5 text-center">
            <p className="font-serif text-[12.5px] sm:text-[13.5px] text-neutral-200 leading-snug">
              {config.flashlight?.note || "Out of every single picture of yours, this one has my entire heart. There is something so pure and breathtaking about your smile here. 🌻❤️"}
            </p>
          </div>
        </div>

        {/* The Scratchable Canvas Layer On Top */}
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{
            opacity: isRevealed ? 0 : 1,
            pointerEvents: isRevealed ? 'none' : 'auto',
          }}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none z-20 transition-opacity duration-700 rounded-2xl"
        />

        {/* Revealed Sparkle Burst */}
        {isRevealed && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-3 right-3 z-30 px-2.5 py-0.5 rounded-full bg-amber-400 text-neutral-950 text-[10px] font-sans font-bold shadow-md"
          >
            Unlocked ✨
          </motion.div>
        )}
      </div>

      {/* Bottom Action / Hint */}
      <div className="w-full pb-2">
        {!isRevealed ? (
          <button
            onClick={handleManualReveal}
            className="text-[10px] font-mono tracking-widest text-neutral-500 hover:text-amber-300 uppercase transition-colors cursor-pointer"
          >
            tap here to reveal directly 🪄
          </button>
        ) : (
          <motion.button
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              onNext?.();
            }}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 font-sans text-xs font-semibold tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-1.5"
          >
            <span>I love this photo ❤️</span>
            <span>→</span>
          </motion.button>
        )}
      </div>
    </div>
  );
}

// =========================================================
// 3. BUCKET LIST SLIDE (Rectangular Boxes Aligned Left, Right, Center, Bottom)
// =========================================================
// =========================================================
// 3. BUCKET LIST SLIDE (Full-Screen 4-Photo Background & 4 Promises)
// =========================================================
export function BucketListSlide({
  onUnlock,
  onNext,
}: {
  onUnlock?: () => void;
  onNext?: () => void;
}) {
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({});
  const [justStamped, setJustStamped] = useState<string | null>(null);

  // The 4 user-specified promises mapped to the 4 background photos
  const promises = [
    {
      id: "movie",
      place: 'Watch "Me Before You" Together',
      plan: 'Tucked under warm blankets with hot popcorn, holding hands and crying through every scene.',
      icon: "🎬",
      tag: "MOVIE NIGHT",
      vibe: "Warm blankets & happy tears",
      image: "/assets/movie.png",
      align: "self-start ml-1 sm:ml-2",
      width: "w-[88%] sm:w-[84%]",
      rotate: "-rotate-1.5 hover:rotate-0",
      accent: "from-amber-500/20 to-rose-500/20",
    },
    {
      id: "puja",
      place: "A Durga Puja Night Out With You",
      plan: "Pandal hopping till 4 AM, eating random street food, and endless gossiping in a rainy puja night.",
      icon: "🪔",
      tag: "PUJA NIGHT OUT",
      vibe: "Rainy streets & endless gossiping",
      image: "/assets/puja.png",
      align: "self-end mr-1 sm:mr-2",
      width: "w-[89%] sm:w-[85%]",
      rotate: "rotate-2 hover:rotate-0",
      accent: "from-rose-500/20 to-orange-500/20",
    },
    {
      id: "paris",
      place: "Paris Night Under Eiffel Tower",
      plan: "Standing together under the midnight sparkle of the Eiffel Tower, wrapped in your warmth.",
      icon: "🗼",
      tag: "PARISIAN NIGHT",
      vibe: "Midnight sparkle with you",
      image: "/assets/paris_night.png",
      align: "self-start ml-3 sm:ml-4",
      width: "w-[87%] sm:w-[84%]",
      rotate: "-rotate-1 hover:rotate-0",
      accent: "from-blue-500/20 to-rose-500/20",
    },
    {
      id: "edinberg",
      place: "Visiting Edinburgh Together",
      plan: "Walking the misty cobbled Royal Mile in cozy trench coats, exploring ancient Scottish castles hand in hand.",
      icon: "🏰",
      tag: "SCOTTISH HIGHLANDS",
      vibe: "Cobbled streets & castle dreams",
      image: "/assets/edinberg.png",
      align: "self-end mr-1 sm:mr-2",
      width: "w-[90%] sm:w-[86%]",
      rotate: "rotate-1.5 hover:rotate-0",
      accent: "from-purple-500/20 to-indigo-500/20",
    },
  ];

  const selectedCount = Object.values(selectedItems).filter(Boolean).length;
  const isAllPromised = selectedCount === promises.length;

  const toggleItem = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setJustStamped(id);
    setTimeout(() => setJustStamped(null), 700);

    setSelectedItems(prev => {
      const next = { ...prev, [id]: !prev[id] };
      const count = Object.values(next).filter(Boolean).length;
      if (count === promises.length) {
        onUnlock?.();
      }
      return next;
    });
  };

  const handlePromiseAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    const all: Record<string, boolean> = {};
    promises.forEach(item => {
      all[item.id] = true;
    });
    setSelectedItems(all);
    setJustStamped('all');
    setTimeout(() => setJustStamped(null), 700);
    onUnlock?.();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center px-3 pt-2 pb-16 select-none pointer-events-auto overflow-hidden bg-gradient-to-b from-[#0a0715] via-[#120b22] to-[#07040d]">
      {/* Subtle Ambient Twinkling Stardust Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            style={{
              left: `${(i * 19) % 94}%`,
              top: `${(i * 29) % 90}%`,
              animationDelay: `${(i * 0.4) % 3}s`,
            }}
            className="absolute w-1 h-1 bg-rose-200/80 rounded-full animate-ping"
          />
        ))}
      </div>

      {/* Ambient Romantic Glow */}
      <div className="absolute -top-16 -left-16 w-56 h-56 bg-rose-500/15 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 w-full pt-0.5 space-y-0.5 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/60 border border-white/20 text-rose-300 shadow-xs backdrop-blur-md"
        >
          <span className="text-[10px] animate-pulse">💖</span>
          <span className="font-mono text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.24em] font-semibold text-rose-200">
            4 SACRED PROMISES • US FOREVER
          </span>
          <Sparkles className="w-3 h-3 text-amber-400" />
        </motion.div>

        <h2 className="font-serif text-2xl sm:text-[26px] font-bold text-white tracking-tight drop-shadow-md">
          Places I Wish to Take You 🗺️
        </h2>
        <p className="text-[11px] sm:text-[11.5px] text-rose-200/85 font-sans">
          Tap each box to promise me these 4 dreams. 🌻
        </p>
      </div>

      {/* 4 Organically Aligned Rectangular Boxes (Fits full screen, ZERO inner scroll) */}
      <div className="relative z-10 w-full max-w-[390px] flex-1 min-h-0 flex flex-col justify-around py-1 my-auto">
        {promises.map((item, idx) => {
          const isSelected = !!selectedItems[item.id];
          const wasJustStamped = justStamped === item.id || justStamped === 'all';

          return (
            <motion.div
              key={item.id}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => toggleItem(item.id, e)}
              className={`relative ${item.align} ${item.width} ${item.rotate} rounded-2xl border transition-all duration-300 cursor-pointer text-left p-2.5 sm:p-3 shadow-lg group ${
                isSelected
                  ? 'border-rose-400/90 shadow-[0_0_24px_rgba(244,63,94,0.45)] ring-1 ring-rose-400/60'
                  : 'border-white/20 hover:border-white/40 shadow-md'
              }`}
            >
              {/* Background Image Behind the Promise with Light Transparent Layer */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <img
                  src={item.image}
                  alt={item.place}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isSelected ? 'scale-105' : 'group-hover:scale-105'
                  }`}
                />
                {/* Light transparent film - slightly darkened for balanced contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/30" />
                {isSelected && (
                  <div className="absolute inset-0 bg-rose-500/10 pointer-events-none" />
                )}
              </div>

              {/* Washi-Tape Accent on Corner */}
              <div
                className={`absolute -top-1.5 ${
                  idx % 2 === 0 ? 'left-4 rotate-[-3deg]' : 'right-4 rotate-[3deg]'
                } w-8 h-2.5 bg-amber-200/80 border border-amber-300/70 rounded-xs pointer-events-none z-20 shadow-xs`}
              />

              {/* Foreground Content */}
              <div className="relative z-10 space-y-1">
                {/* Top Tag & Route */}
                <div className="flex items-center justify-between text-[8.5px] font-mono tracking-wider uppercase">
                  <span className="font-bold text-rose-200 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-1 shadow-xs">
                    <span>{item.icon}</span>
                    <span>{item.tag}</span>
                  </span>
                  <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-black/60 text-white/95 border border-white/20 font-sans backdrop-blur-md shadow-xs">
                    {item.vibe}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-serif text-[13.5px] sm:text-[14.5px] font-bold text-white leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                  {item.place}
                </h4>

                {/* Plan Description with subtle glassmorphic card for 100% legibility */}
                <p className="font-sans text-[10.5px] sm:text-[11px] text-white/95 font-normal leading-snug line-clamp-2 drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.9)] bg-black/35 backdrop-blur-[2px] px-2 py-1 rounded-lg border border-white/10">
                  {item.plan}
                </p>

                {/* Bottom Row / Interactive Button */}
                <div className="flex items-center justify-between gap-1.5 pt-1 border-t border-white/20">
                  <span className="text-[8.5px] font-mono text-white/95 font-semibold uppercase tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] px-1.5 py-0.5 rounded bg-black/45 backdrop-blur-xs">
                    PROMISE {idx + 1} OF 4
                  </span>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => toggleItem(item.id, e)}
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold transition-all cursor-pointer inline-flex items-center gap-1 shadow-md ${
                      isSelected
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white ring-1 ring-white/50'
                        : 'bg-black/70 hover:bg-black/85 text-rose-200 border border-rose-300/40 backdrop-blur-md'
                    }`}
                  >
                    <Heart className={`w-2.5 h-2.5 ${isSelected ? 'fill-white text-white' : 'text-rose-400'}`} />
                    <span>{isSelected ? 'Promised 💖' : 'Promise'}</span>
                  </motion.button>
                </div>
              </div>

              {/* Stamped Wax / Rubber Passport Seal Overlay */}
              {isSelected && (
                <motion.div
                  animate={
                    wasJustStamped
                      ? { scale: [0.5, 1.25, 1], rotate: [-24, 6, -12] }
                      : { scale: 1, rotate: -12 }
                  }
                  transition={{ duration: 0.4 }}
                  className="absolute right-2 -top-1.5 w-10 h-10 rounded-full border-2 border-rose-500 bg-rose-950/95 flex flex-col items-center justify-center p-0.5 pointer-events-none shadow-md text-rose-300 font-mono font-bold leading-none select-none z-20"
                >
                  <span className="text-[5.5px] uppercase tracking-tighter">SEALED</span>
                  <Heart className="w-2.5 h-2.5 fill-rose-500 text-rose-500 my-0.2" />
                  <span className="text-[5px] tracking-tight">FOREVER</span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom HUD Progress & Seal All Action */}
      <div className="relative z-10 w-full max-w-[360px] bg-black/65 backdrop-blur-md rounded-xl p-2 border border-white/20 shadow-md space-y-1">
        <div className="flex items-center justify-between text-[10.5px] font-sans font-semibold">
          <div className="flex items-center gap-1.5 text-neutral-300">
            {promises.map(p => (
              <span
                key={`dot-${p.id}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedItems[p.id]
                    ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,1)] scale-110'
                    : 'bg-neutral-600'
                }`}
              />
            ))}
            <span className="ml-1 text-[10px]">
              {selectedCount} of 4 Promises Sealed
            </span>
          </div>

          {!isAllPromised ? (
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={handlePromiseAll}
              className="text-[9.5px] font-sans font-bold text-rose-300 hover:text-white bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded-full border border-white/20 transition-colors cursor-pointer inline-flex items-center gap-0.5"
            >
              <span>Seal All</span>
              <span>💌</span>
            </motion.button>
          ) : (
            <span className="text-rose-400 font-bold text-[10px] animate-pulse">
              All 4 Sealed! 💍
            </span>
          )}
        </div>

        {isAllPromised && (
          <motion.p
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[9.5px] font-serif text-amber-200 font-normal italic pt-0.5"
          >
            "I promise you every single one of these lifetimes." 💍❤️
          </motion.p>
        )}
      </div>
    </div>
  );
}

// =========================================================
// 4. CONSTELLATION SLIDE (Heart Constellation & Quote)
// =========================================================
export function ConstellationSlide({
  onUnlock,
  onNext,
}: {
  onUnlock?: () => void;
  onNext?: () => void;
}) {
  // Star 0 (top cleft) starts as the origin anchor!
  const [connectedCount, setConnectedCount] = useState<number>(1);
  const [isFormed, setIsFormed] = useState(false);
  const [lastTrait, setLastTrait] = useState<string>("Your Heart");
  const [justTappedIdx, setJustTappedIdx] = useState<number | null>(null);
  const [wrongTapIdx, setWrongTapIdx] = useState<number | null>(null);

  // 12 stars placed symmetrically along the iconic heart curve
  // Tracing sequence: 0 (center top cleft) -> 1, 2, 3, 4, 5 (down the left side!) -> 6 (bottom tip) -> 7, 8, 9, 10, 11 (up the right side!) -> closes to 0!
  const stars = [
    { id: 0, x: 50, y: 32, label: "Your Heart", icon: "❤️" },
    { id: 1, x: 36, y: 18, label: "Your Laugh", icon: "✨" },
    { id: 2, x: 22, y: 22, label: "Your Innocence", icon: "🌸" },
    { id: 3, x: 12, y: 38, label: "Your Ambition", icon: "⭐" },
    { id: 4, x: 16, y: 56, label: "Your Kindness", icon: "🤍" },
    { id: 5, x: 32, y: 74, label: "Your Warmth", icon: "☀️" },
    { id: 6, x: 50, y: 91, label: "Our Story", icon: "📖" },
    { id: 7, x: 68, y: 74, label: "Your Trust", icon: "🗝️" },
    { id: 8, x: 84, y: 56, label: "Your Courage", icon: "🌟" },
    { id: 9, x: 88, y: 38, label: "Your Eyes", icon: "👁️" },
    { id: 10, x: 78, y: 22, label: "Your Silence", icon: "🌙" },
    { id: 11, x: 64, y: 18, label: "Your Smile", icon: "🌻" },
  ];

  // The active star that MUST be tapped next (strictly sequential)
  // When connectedCount = 1, active is Star 1 (the first dot on the LEFT)
  const activeStarIndex = connectedCount < stars.length ? connectedCount : 0;

  const handleStarTap = (starIdx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFormed) return;

    // Strict guide: ONLY the active target star advances the path!
    // Prevents tap on left jumping to right, and enforces dot-by-dot tracing.
    if (starIdx !== activeStarIndex) {
      setWrongTapIdx(starIdx);
      setTimeout(() => setWrongTapIdx(null), 400);
      return;
    }

    setJustTappedIdx(starIdx);
    setTimeout(() => setJustTappedIdx(null), 500);

    const nextCount = connectedCount + 1;
    const tappedStar = stars[starIdx];
    setLastTrait(tappedStar.label);
    setConnectedCount(nextCount);

    // When 12 stars are connected, complete and lock in the heart!
    if (nextCount >= 12) {
      setIsFormed(true);
      onUnlock?.();
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setConnectedCount(1);
    setIsFormed(false);
    setLastTrait("Your Heart");
  };

  // Build the list of active lines connecting star to star
  const linesToRender: Array<{ x1: number; y1: number; x2: number; y2: number; key: string }> = [];
  for (let i = 0; i < connectedCount - 1; i++) {
    if (i < stars.length - 1) {
      linesToRender.push({
        x1: stars[i].x,
        y1: stars[i].y,
        x2: stars[i + 1].x,
        y2: stars[i + 1].y,
        key: `line-${i}-${i + 1}`,
      });
    }
  }

  // GUARANTEED CLOSURE: When the 12th star is tapped, connect the final line from Star 11 back to Star 0!
  if (connectedCount >= 12 || isFormed) {
    linesToRender.push({
      x1: stars[11].x,
      y1: stars[11].y,
      x2: stars[0].x,
      y2: stars[0].y,
      key: `closing-line-11-0`,
    });
  }

  return (
    <div
      className="relative w-full h-full max-w-[380px] flex flex-col justify-between items-center text-center px-4 pt-3 pb-16 bg-gradient-to-b from-[#050713] via-[#090d21] to-[#04050a] select-none pointer-events-auto overflow-hidden"
    >
      {/* Background Twinkling Dust */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(22)].map((_, i) => (
          <div
            key={i}
            style={{
              left: `${(i * 17) % 94}%`,
              top: `${(i * 23) % 92}%`,
              animationDelay: `${(i * 0.35) % 3}s`,
            }}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
          />
        ))}
      </div>

      {/* Top Badge */}
      <div className="w-full pt-1 z-10">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-300 shadow-xs mb-1"
        >
          <span className="text-[11px] animate-pulse">💖</span>
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-rose-300 font-medium">
            {config.constellation?.badge || "A CELESTIAL PROMISE"}
          </span>
        </motion.div>
      </div>

      {/* Center Interactive Constellation Sky (Heart Shape) */}
      <div className="relative w-full max-w-[295px] aspect-square my-auto flex items-center justify-center">
        {/* SVG Drawing Lines forming the heart */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full z-10 pointer-events-none filter drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]"
        >
          {/* Faint stardust heart guideline path */}
          <path
            d="M 50,32 C 36,18 22,22 12,38 C 16,56 32,74 50,91 C 68,74 84,56 88,38 C 78,22 64,18 50,32 Z"
            fill="none"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="0.8"
            strokeDasharray="2 3"
          />

          {/* Progressively Drawn Neon Gradient Lines */}
          {linesToRender.map(line => (
            <motion.line
              key={line.key}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="url(#heartNeonGrad)"
              strokeWidth={isFormed ? "2.8" : "2.4"}
              strokeLinecap="round"
            />
          ))}

          {/* Seamless closed glowing heart path once formed (zero gaps guaranteed) */}
          {isFormed && (
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              d="M 50,32 L 36,18 L 22,22 L 12,38 L 16,56 L 32,74 L 50,91 L 68,74 L 84,56 L 88,38 L 78,22 L 64,18 Z"
              fill="url(#heartInteriorBlush)"
              stroke="url(#heartNeonGrad)"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          )}

          <defs>
            <linearGradient id="heartNeonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="50%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
            <radialGradient id="heartInteriorBlush" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(244, 63, 94, 0.18)" />
              <stop offset="80%" stopColor="rgba(244, 63, 94, 0.04)" />
              <stop offset="100%" stopColor="rgba(244, 63, 94, 0)" />
            </radialGradient>
          </defs>
        </svg>

        {/* Stars Nodes along the heart perimeter */}
        {stars.map((star, index) => {
          const isConnected = index < connectedCount || isFormed;
          const isCurrentTarget = index === activeStarIndex && !isFormed;
          const wasJustClicked = justTappedIdx === index;
          const isWrongTap = wrongTapIdx === index;

          return (
            <div
              key={star.id}
              style={{ left: `${star.x}%`, top: `${star.y}%` }}
              onClick={(e) => handleStarTap(index, e)}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer p-4 group"
              title={`Star ${index + 1}: ${star.label}`}
            >
              {/* Target Star Halo Beacon Ring */}
              {isCurrentTarget && (
                <span className="absolute inset-1 rounded-full bg-rose-500/40 animate-ping pointer-events-none" />
              )}

              {/* Just-Tapped Shockwave Burst */}
              {wasJustClicked && (
                <motion.span
                  initial={{ scale: 0.8, opacity: 1 }}
                  animate={{ scale: 2.4, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 rounded-full border border-amber-300 bg-amber-400/30 pointer-events-none"
                />
              )}

              {/* Star Core Orb */}
              <motion.div
                animate={
                  isWrongTap
                    ? { x: [-3, 3, -2, 2, 0] }
                    : isConnected
                    ? { scale: [1, 1.25, 1] }
                    : isCurrentTarget
                    ? { scale: [1, 1.35, 1] }
                    : { scale: [0.9, 1.05, 0.9] }
                }
                transition={{ repeat: isConnected && !isWrongTap ? 0 : isCurrentTarget ? Infinity : 0, duration: isWrongTap ? 0.3 : 1.6 }}
                className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all ${
                  isConnected
                    ? 'bg-gradient-to-tr from-rose-500 to-amber-300 border-amber-200 shadow-[0_0_16px_rgba(244,63,94,0.95)]'
                    : isCurrentTarget
                    ? 'bg-amber-300 border-white shadow-[0_0_16px_rgba(251,191,36,1)] ring-2 ring-rose-400'
                    : 'bg-neutral-800 border-neutral-600 group-hover:border-rose-400'
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    isConnected ? 'bg-white' : isCurrentTarget ? 'bg-amber-950 animate-pulse' : 'bg-neutral-400'
                  }`}
                />
              </motion.div>

              {/* Floating "Tap ✨" Indicator on Active Target Star */}
              {isCurrentTarget && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: [-2, -6, -2] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                  className="absolute left-1/2 -top-6 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white text-[8.5px] font-sans font-bold shadow-md pointer-events-none z-30"
                >
                  Tap ✨
                </motion.div>
              )}
            </div>
          );
        })}

        {/* Center Glowing Intertwined Heart & Sunflower (Blooms on formation) */}
        <AnimatePresence>
          {isFormed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: [1, 1.06, 1] }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
              }}
              className="relative z-30 flex flex-col items-center justify-center p-3"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/25 via-amber-500/25 to-rose-500/25 filter blur-xl animate-pulse" />
              <div className="relative flex items-center justify-center gap-1.5 text-4xl sm:text-5xl filter drop-shadow-[0_0_20px_rgba(244,63,94,0.85)]">
                <span>🌻</span>
                <span className="text-rose-500 animate-pulse">❤️</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sentence Reveal & Step-by-Step Tapping HUD */}
      <div className="w-full z-10 space-y-2 pb-1">
        <AnimatePresence mode="wait">
          {isFormed ? (
            <motion.div
              key="revealed-quote"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1.5 max-w-[320px] mx-auto px-1"
            >
              <p className="font-serif text-[12.5px] sm:text-[14px] text-amber-100 leading-relaxed font-normal">
                "{config.constellation?.quote1 || "If I could give you one thing in life, I would give you the ability to see yourself through my eyes."}"
              </p>
              <p className="font-serif text-[11.5px] sm:text-[13px] text-rose-200/90 leading-relaxed italic">
                "{config.constellation?.quote2 || "Only then would you realize how truly special you are to me."}"
              </p>
              <div className="pt-1 flex items-center justify-center gap-3">
                <span className="inline-block text-[10px] font-sans uppercase tracking-widest text-amber-300/90">
                  Always my sunflower 🌻🤍
                </span>
                <button
                  onClick={handleReset}
                  className="text-[9.5px] font-mono text-rose-300 hover:text-white uppercase tracking-wider underline cursor-pointer px-2 py-0.5 rounded bg-rose-950/40 border border-rose-800/60"
                >
                  Trace Again ↺
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tap-prompt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-2 max-w-[320px] mx-auto"
            >
              {/* Progress Tracker with Micro Star Pips */}
              <div className="flex items-center justify-center gap-1.5">
                {stars.map((_, i) => (
                  <div
                    key={`pip-${i}`}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i < connectedCount
                        ? 'bg-rose-400 scale-110 shadow-[0_0_6px_rgba(244,63,94,0.9)]'
                        : i === activeStarIndex
                        ? 'bg-amber-300 animate-ping'
                        : 'bg-neutral-700'
                    }`}
                  />
                ))}
              </div>

              {/* Status Message */}
              <div>
                <p className="font-serif text-xs sm:text-[13px] text-neutral-200">
                  {connectedCount === 1
                    ? 'Tap the glowing star on the left to begin tracing (1 / 12) ✨'
                    : `Star ${connectedCount} of ${stars.length}: "${lastTrait}" ✨`}
                </p>
                <p className="text-[10px] font-mono tracking-widest text-rose-300/80 uppercase mt-0.5">
                  Tap all {stars.length} stars to reveal our constellation 💖
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// =========================================================
// 5. VOICE NOTE SLIDE (Audio Birthday Wish)
// =========================================================
export function VoiceNoteSlide({
  onUnlock,
  onNext,
  onAudioPlay,
  onAudioPause,
}: {
  onUnlock?: () => void;
  onNext?: () => void;
  onAudioPlay?: () => void;
  onAudioPause?: () => void;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:45");
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        const audio = audioRef.current;
        if (audio && !isNaN(audio.duration) && audio.duration > 0) {
          const pct = (audio.currentTime / audio.duration) * 100;
          setProgress(pct);
          const mins = Math.floor(audio.currentTime / 60);
          const secs = Math.floor(audio.currentTime % 60);
          setCurrentTime(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
        } else {
          setProgress(prev => {
            if (prev >= 100) {
              setIsPlaying(false);
              onAudioPause?.();
              return 100;
            }
            return prev + 2;
          });
        }
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, onAudioPause]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!isPlaying) {
      onAudioPlay?.();
      setIsPlaying(true);
      setHasPlayed(true);
      onUnlock?.();
      if (audio) {
        audio.play().catch(() => { });
      }
    } else {
      setIsPlaying(false);
      onAudioPause?.();
      if (audio) {
        audio.pause();
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    onAudioPause?.();
    setProgress(100);
    onUnlock?.();
  };

  const waveformBars = [
    30, 45, 60, 80, 50, 90, 75, 40, 65, 85, 95, 70, 55, 80, 65, 90, 45, 60, 75, 85, 50, 40
  ];

  return (
    <div className="w-full max-w-[340px] flex flex-col items-center text-center px-2 py-3 select-none pointer-events-auto">
      {/* Top Pill */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200/80 shadow-xs mb-3 backdrop-blur-md"
      >
        <span className="text-[11px] animate-pulse">🎙️</span>
        <span className="text-[9.5px] font-sans tracking-[0.2em] uppercase font-bold text-rose-700">
          Personal Audio Note • For Rikta
        </span>
      </motion.div>

      {/* Headline */}
      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-800 tracking-tight mb-1">
        Listen closely... 🎧
      </h2>
      <p className="text-xs text-gray-600 font-sans max-w-[270px] mb-4">
        Because some birthday wishes are meant to be heard in my own voice.
      </p>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={config.voiceNote?.audioSrc || "/assets/voice_note.mp3"}
        preload="metadata"
        onEnded={handleEnded}
        onLoadedMetadata={() => {
          if (audioRef.current && !isNaN(audioRef.current.duration)) {
            const mins = Math.floor(audioRef.current.duration / 60);
            const secs = Math.floor(audioRef.current.duration % 60);
            setDuration(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
          }
        }}
      />

      {/* Voice Note Messenger Bubble Card */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-rose-200/90 shadow-[0_10px_30px_rgba(244,63,94,0.12)] space-y-3"
      >
        <div className="flex items-center gap-3">
          {/* Play / Pause Circular Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 text-white shadow-md flex items-center justify-center cursor-pointer flex-shrink-0"
            title={isPlaying ? "Pause voice note" : "Play voice note"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </motion.button>

          {/* Waveform Visualization Bars */}
          <div className="flex-1 flex flex-col justify-center gap-1.5 min-w-0">
            <div className="flex items-center justify-between gap-1 h-8 px-1">
              {waveformBars.map((height, idx) => {
                const barProgress = (idx / waveformBars.length) * 100;
                const isPassed = progress >= barProgress;
                return (
                  <motion.span
                    key={idx}
                    animate={isPlaying ? {
                      scaleY: [1, 1.35, 0.7, 1],
                    } : { scaleY: 1 }}
                    transition={isPlaying ? {
                      repeat: Infinity,
                      duration: 0.6 + (idx % 4) * 0.15,
                      ease: "easeInOut"
                    } : { duration: 0.2 }}
                    style={{ height: `${height}%` }}
                    className={`w-1 rounded-full transition-colors ${isPassed ? 'bg-rose-500' : 'bg-gray-200'
                      }`}
                  />
                );
              })}
            </div>

            {/* Timestamps */}
            <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 px-1">
              <span>{currentTime}</span>
              <span>{duration}</span>
            </div>
          </div>
        </div>

        {/* Caption beneath bubble */}
        <div className="pt-1 border-t border-rose-100/70 flex items-center justify-between text-[11px] font-sans text-gray-500">
          <span className="flex items-center gap-1">
            <span>🌻</span>
            <span>{config.voiceNote?.title || "A Voice Note From Rajdeep"}</span>
          </span>
          <span className="text-rose-500 font-medium">
            {isPlaying ? "Playing... ❤️" : hasPlayed ? "Listened ✨" : "Tap play"}
          </span>
        </div>
      </motion.div>

      {/* Heartfelt Note Below */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 font-serif text-[13px] text-gray-600 italic max-w-[280px]"
      >
        "I wanted you to hear it directly from me, just in case you ever doubt how deeply you are loved." 🌻🤍
      </motion.p>
    </div>
  );
}
