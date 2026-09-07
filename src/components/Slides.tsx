import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { config } from '../config';
import { Heart, Sparkles, MapPin, Calendar, Quote, ArrowRight } from 'lucide-react';

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
        <span>Auto-playing story • Tap to skip</span>
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
          {slide.content.split('\n').map((line: string, i: number) => (
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
          <div className="w-48 h-32 sm:w-52 sm:h-36 my-2.5 rounded-xl overflow-hidden shadow-md border-2 border-white relative rotate-1 group">
            <img
              src={memory.photo}
              alt={memory.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Washi Tape Strip */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-amber-100/85 -rotate-2 border-b border-amber-200/50 shadow-2xs" />
          </div>
        )}

        {/* Story Description */}
        <p className="font-sans text-gray-700 text-[13.5px] sm:text-[14px] leading-relaxed mb-3.5 px-1 font-normal">
          {memory.description}
        </p>

        {/* Handwritten Romantic Quote Card */}
        <div className="w-full bg-rose-50/70 border border-rose-200/60 rounded-xl p-2.5 sm:p-3 relative">
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-300 absolute -top-1.5 left-3.5" />
          <p className="font-serif italic text-rose-800 text-[14px] sm:text-[15px] leading-snug">
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
    <div className="w-full h-full flex flex-col items-center justify-center py-2 px-2 select-none">
      {/* Romantic Film Polaroid Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? 2 : -2 }}
        animate={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? 1.5 : -1.5 }}
        whileHover={{ scale: 1.03, rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={handlePhotoTap}
        className="bg-white p-3.5 pb-12 rounded-sm shadow-[0_16px_45px_-12px_rgba(0,0,0,0.18)] relative w-full max-w-[285px] sm:max-w-[300px] aspect-[4/5] flex flex-col pointer-events-auto cursor-pointer border border-gray-100 group"
      >
        {/* Realistic Washi Tape at Top */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-amber-100/90 border-b border-amber-200/50 shadow-2xs rotate-1 z-20 backdrop-blur-xs" />

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

        {/* The Photo Image */}
        <div className="w-full flex-1 bg-gray-50 relative overflow-hidden rounded-xs">
          <img
            src={photo.src}
            alt={photo.caption}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Handwritten Caption at Bottom */}
        <p className="absolute bottom-4 left-0 w-full text-center font-serif italic text-gray-800 text-[14px] sm:text-[15px] px-2 leading-tight">
          {photo.caption}
        </p>

        {/* Cute Tap Icon */}
        <span className="absolute bottom-1 right-2 text-[10px] text-rose-400 opacity-60 group-hover:opacity-100 transition-opacity">
          Tap me ❤️
        </span>
      </motion.div>

      {/* Location & Date Badge */}
      <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1 rounded-full bg-white/80 border border-gray-200/60 shadow-2xs text-[10px] font-sans tracking-widest uppercase text-gray-600 font-medium">
        <MapPin className="w-3 h-3 text-rose-400" />
        <span>{photo.location}</span>
        <span>•</span>
        <span>{photo.date}</span>
      </div>
    </div>
  );
}

export function VideoSlide({ index }: { index: number }) {
  const video = config.videos[index];
  return (
    <div className="w-full text-center px-2">
      <div className="pointer-events-auto relative z-30 bg-white p-2.5 rounded-2xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.12)] border border-rose-100/60 w-full max-w-[285px] mx-auto aspect-[9/16] overflow-hidden mb-6">
        <video
          src={video.src}
          controls
          className="w-full h-full object-cover rounded-xl relative z-10"
        />
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm italic opacity-50 z-0">
          [Video Placeholder]
        </div>
      </div>
      <p className="font-serif italic text-gray-700 text-base sm:text-lg px-4">
        "{video.caption}"
      </p>
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

export function RiddleSlide({ index, onUnlock, onNext }: { index: number; onUnlock: () => void; onNext: () => void; key?: string | number }) {
  const riddle = config.riddles[index];
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState<'correct' | 'wrong' | null>(null);
  const [catSparks, setCatSparks] = useState(false);

  const onNextRef = useRef(onNext);
  const onUnlockRef = useRef(onUnlock);
  useEffect(() => {
    onNextRef.current = onNext;
    onUnlockRef.current = onUnlock;
  });

  const handleGuess = (opt: string) => {
    if (status === 'correct') {
      onNextRef.current();
      return;
    }
    setSelected(opt);
    if (opt === riddle.answer) {
      setStatus('correct');
      setCatSparks(true);
      onUnlockRef.current();
      setTimeout(() => {
        onNextRef.current();
      }, 1200);
    } else {
      setStatus('wrong');
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center px-3 relative select-none"
      onClick={() => {
        if (status === 'correct') {
          onNextRef.current();
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
        <span>RIDDLE 0{index + 1} OF 09 • GUESS CAREFULLY</span>
      </div>

      <p className="font-serif text-xl sm:text-2xl text-center text-gray-900 mb-8 leading-snug px-2 font-medium">
        "{riddle.question}"
      </p>

      {/* Options List */}
      <div className="space-y-2.5 w-full max-w-[310px] mb-6">
        {riddle.options.map(opt => {
          const isSelected = selected === opt;
          const isCorrect = status === 'correct' && opt === riddle.answer;
          const isWrong = status === 'wrong' && isSelected;

          return (
            <button
              key={opt}
              onClick={(e) => { e.stopPropagation(); handleGuess(opt); }}
              className={`pointer-events-auto relative z-30 w-full text-left px-4 py-3.5 rounded-2xl font-sans text-sm tracking-wide transition-all duration-300 border flex items-center justify-between cursor-pointer ${
                isCorrect
                  ? "bg-[#FFF4F4] border-red-300 text-red-900 shadow-md scale-[1.02] ring-2 ring-red-200"
                  : isWrong
                  ? "bg-gray-50/70 border-gray-200 text-gray-400 opacity-60"
                  : "bg-white/90 border-rose-100/80 text-gray-700 backdrop-blur-sm shadow-xs hover:shadow-md hover:border-rose-200 active:scale-[0.98]"
              }`}
              disabled={status === 'correct' && !isCorrect}
            >
              <span className="font-medium">{opt}</span>
              {isCorrect && (
                <img src="/assets/sunflower1.png" alt="Correct" className="w-5 h-5 object-contain inline-block animate-bounce" />
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback Message */}
      <div className="h-16 flex flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          {status && (
            <motion.div
              key={status}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <p className={`font-serif text-[16px] sm:text-[17px] text-center italic ${status === 'correct' ? 'text-red-700 font-medium' : 'text-gray-500'}`}>
                {status === 'correct' ? riddle.successMessage : riddle.wrongMessage}
              </p>
              {status === 'correct' && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.85, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onNextRef.current();
                  }}
                  className="pointer-events-auto mt-2.5 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-sans text-xs font-semibold tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <Sparkles className="w-3.5 h-3.5 text-rose-200 animate-pulse" />
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  <span>🌻</span>
                </motion.button>
              )}
            </motion.div>
          )}
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
    <div className="w-full flex flex-col items-center justify-center px-2 py-1 select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[340px] sm:max-w-[365px] bg-white/92 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-rose-100/90 shadow-[0_16px_42px_-12px_rgba(225,29,72,0.16)] flex flex-col items-center pointer-events-auto relative text-center"
      >
        {/* Top Situation Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-rose-50 border border-rose-200/80 text-[9px] sm:text-[10px] font-sans tracking-[0.18em] uppercase font-bold text-rose-700 mb-1.5 shadow-2xs">
          <Sparkles className="w-2.5 h-2.5 text-rose-500" />
          <span>{situation.badge}</span>
        </div>

        {/* Catchy Relatable Title */}
        <h3 className="font-serif text-[17px] sm:text-[18.5px] font-semibold text-gray-900 leading-tight mb-2 px-1">
          "{situation.title}"
        </h3>

        {/* Interactive Photo Frame */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handlePhotoTap}
          className="w-full h-40 sm:h-48 rounded-xl overflow-hidden shadow-md border-2 border-white relative group cursor-pointer bg-rose-50"
        >
          {/* Subtle Washi Tape Accent */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-amber-100/80 border-b border-amber-200/50 shadow-2xs rotate-1 z-20 backdrop-blur-xs rounded-xs pointer-events-none" />

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

          {/* Individual Photo */}
          <img
            src={situation.photo}
            alt={situation.caption || situation.title}
            className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Photo Bottom Caption Gradient Strip */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-2 pt-4 flex items-end justify-between pointer-events-none">
            <span className="text-[10.5px] font-serif italic text-white/95 truncate drop-shadow-xs max-w-[70%]">
              {situation.caption}
            </span>
            <span className="text-[9px] font-sans text-rose-200 font-medium px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-xs border border-white/20">
              Tap her ❤️
            </span>
          </div>
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
