import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { config } from '../config';
import { Heart } from 'lucide-react';

export function TextSlide({ slide }: { slide: any }) {
  const isHeyYou = slide.id === 'intro-1' || slide.content?.startsWith('Hey you');

  return (
    <div className={`w-full text-${slide.align || 'center'} space-y-8 px-2`}>
      {slide.content.split('\n').map((line: string, i: number) => (
        <p
          key={i}
          className={`font-serif leading-relaxed ${
            isHeyYou
              ? 'text-3xl md:text-4xl text-[#DE4364] font-medium tracking-wide drop-shadow-xs'
              : slide.heading 
              ? 'text-3xl md:text-4xl text-gray-900 tracking-tight' 
              : 'text-xl md:text-2xl text-gray-700'
          }`}
        >
          {line}
        </p>
      ))}
      {slide.subtext && (
        <p className="text-[10px] text-red-400 font-sans tracking-widest absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap uppercase">
          {slide.subtext}
        </p>
      )}
    </div>
  );
}

export function MemorySlide({ index }: { index: number }) {
  const memory = config.memories[index];
  return (
    <div className="w-full text-center px-4">
      <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-blue-500 block mb-6 font-semibold">
        {memory.date}
      </span>
      <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">
        {memory.title}
      </h3>
      <p className="font-sans text-gray-600 text-[15px] leading-relaxed mb-10 px-2">
        {memory.description}
      </p>
      <div className="relative inline-block px-4">
        <span className="absolute -top-6 -left-2 text-5xl text-red-100 font-serif opacity-60">"</span>
        <p className="font-serif italic text-red-800/80 text-lg relative z-10 leading-snug">
          {memory.caption}
        </p>
      </div>
    </div>
  );
}

export function PhotoSlide({ index }: { index: number }) {
  const photo = config.photos[index];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-4">
      <div className="bg-white p-3 pb-14 rounded-sm shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] rotate-2 relative w-full max-w-[280px] aspect-[4/5] flex flex-col pointer-events-auto">
        <div className="w-full flex-1 bg-gray-100 relative overflow-hidden rounded-sm">
          <img src={photo.src} className="absolute inset-0 w-full h-full object-cover" alt={photo.caption} />
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm italic opacity-50 pointer-events-none">
            [Photo Placeholder]
          </div>
        </div>
        <p className="absolute bottom-5 left-0 w-full text-center font-serif text-gray-800 text-[15px]">
          {photo.caption}
        </p>
      </div>
      <p className="text-[10px] font-sans tracking-[0.2em] text-gray-400 uppercase mt-12 font-medium">
        {photo.date}
      </p>
    </div>
  );
}

export function VideoSlide({ index }: { index: number }) {
  const video = config.videos[index];
  return (
    <div className="w-full text-center px-2">
      <div className="pointer-events-auto relative z-30 bg-white p-2 rounded-2xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] border border-gray-100/50 w-full max-w-[280px] mx-auto aspect-[9/16] overflow-hidden mb-8">
        <video
          src={video.src}
          controls
          className="w-full h-full object-cover rounded-xl relative z-10"
        />
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm italic opacity-50 z-0">
          [Video Placeholder]
        </div>
      </div>
      <p className="font-serif italic text-gray-600 text-lg px-4">
        "{video.caption}"
      </p>
    </div>
  );
}

export function NoteSlide({ index }: { index: number }) {
  const note = config.loveNotes[index];
  return (
    <div className="w-full text-center px-4">
      <h3 className="font-serif text-3xl text-pink-700 mb-8 tracking-tight">
        {note.title}
      </h3>
      <p className="font-sans text-gray-700 text-lg leading-relaxed px-2">
        "{note.text}"
      </p>
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
      // If already correct, clicking advances immediately
      onNextRef.current();
      return;
    }
    setSelected(opt);
    if (opt === riddle.answer) {
      setStatus('correct');
      setCatSparks(true);
      onUnlockRef.current();
      // Automatically advance to the next slide
      setTimeout(() => {
        onNextRef.current();
      }, 1100);
    } else {
      setStatus('wrong');
    }
  };

  return (
    <div 
      className="w-full flex flex-col items-center px-2 relative"
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
                className="w-8 h-8 flex items-center justify-center filter drop-shadow-sm"
              >
                <img src={img} alt="Sunflower celebrate" className="w-full h-full object-contain" />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <p className="font-serif text-xl md:text-2xl text-center text-gray-900 mb-10 leading-snug">
        "{riddle.question}"
      </p>
      
      <div className="space-y-3 w-full max-w-[300px] mb-8">
        {riddle.options.map(opt => {
          const isSelected = selected === opt;
          const isCorrect = status === 'correct' && opt === riddle.answer;
          const isWrong = status === 'wrong' && isSelected;
          
          return (
            <button
              key={opt}
              onClick={(e) => { e.stopPropagation(); handleGuess(opt); }}
              className={`pointer-events-auto relative z-30 w-full text-left px-5 py-4 rounded-2xl font-sans text-sm tracking-wide transition-all duration-300 border flex items-center justify-between ${
                isCorrect
                  ? "bg-[#FFF4F4] border-red-300 text-red-900 shadow-md scale-[1.02] ring-2 ring-red-200"
                  : isWrong
                  ? "bg-gray-50/50 border-gray-100 text-gray-400 opacity-60"
                  : "bg-white/85 border-gray-200/70 text-gray-700 backdrop-blur-sm shadow-sm hover:shadow-md active:scale-[0.98]"
              }`}
              disabled={status === 'correct' && !isCorrect}
            >
              <span>{opt}</span>
              {isCorrect && (
                <img src="/assets/sunflower1.png" alt="Correct" className="w-5 h-5 object-contain inline-block animate-bounce" />
              )}
            </button>
          );
        })}
      </div>

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
              <p className={`font-serif text-[17px] text-center italic ${status === 'correct' ? 'text-red-700' : 'text-gray-500'}`}>
                {status === 'correct' ? riddle.successMessage : riddle.wrongMessage}
              </p>
              {status === 'correct' && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="text-[10px] font-sans tracking-[0.2em] uppercase text-red-400 mt-2 font-medium"
                >
                  Next slide coming... ✨
                </motion.span>
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

  return (
    <div className="w-full flex flex-col items-center px-4 text-center">
      <p className="font-serif text-2xl text-gray-900 mb-12">
        What would I give you right now?
      </p>

      {step === 0 && (
        <button
          onClick={advance}
          className="pointer-events-auto relative z-30 px-8 py-3.5 bg-white text-gray-800 rounded-full font-sans text-sm tracking-widest uppercase font-medium shadow-sm hover:shadow-md transition-all border border-gray-200 active:scale-[0.98]"
        >
          Take a guess ❤️
        </button>
      )}

      {step >= 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2 mb-8">
          <p className="font-serif text-xl text-gray-700">An explanation?</p>
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-red-500">No.</p>
        </motion.div>
      )}

      {step >= 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2 mb-12">
          <p className="font-serif text-xl text-gray-700">A gift?</p>
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-red-500">Not enough.</p>
        </motion.div>
      )}

      {step >= 3 && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
          <h2 className="font-serif text-4xl text-red-700">A really, really long hug.</h2>
          <div className="flex justify-center items-center h-16">
            <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: -5, opacity: 1 }} transition={{ duration: 2, ease: "easeOut" }}>
              <Heart className="w-7 h-7 text-red-300 fill-current" />
            </motion.div>
            <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 5, opacity: 1 }} transition={{ duration: 2, ease: "easeOut" }}>
              <Heart className="w-7 h-7 text-red-500 fill-current" />
            </motion.div>
          </div>
          <p className="font-serif text-[17px] text-gray-600 italic px-4 leading-relaxed">
            The kind where neither of us has to say anything.
          </p>
          <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-red-400 mt-12 animate-pulse">
            Tap right to continue
          </p>
        </motion.div>
      )}

      {step > 0 && step < 3 && (
        <button
          onClick={advance}
          className="pointer-events-auto relative z-30 px-8 py-2.5 mt-8 bg-red-50 text-red-800 rounded-full font-sans text-[11px] tracking-[0.2em] uppercase active:scale-[0.98]"
        >
          Next
        </button>
      )}
    </div>
  );
}
