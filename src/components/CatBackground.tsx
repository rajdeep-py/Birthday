import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CatBackgroundProps {
  currentIndex: number;
  direction: number;
  slideType?: string;
  slideId?: string;
}

const sunflowerAssets = [
  '/assets/sunflower1.png',
  '/assets/sunflower2.png',
  '/assets/sunflower3.png',
];

function HeyYouBackground() {
  const [driftKey, setDriftKey] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [catHearts, setCatHearts] = useState<{ id: number; x: number; y: number; emoji: string }[]>([]);

  const catQuotes = [
    "Meow! (He literally talks about you 24/7 🙄❤️)",
    "Verified by cat: 100/10 prettiest girl in the world 🐾",
    "Dherrrr... he's hopelessly obsessed with you ✨",
    "Chupp! Stop blushing, you're making the flowers shy 🙈",
    "Warning: Heart melts every time you smile 🚨💖",
  ];

  // Auto-playing transitions cycle continuously unless user leaves the slide
  useEffect(() => {
    const driftInterval = setInterval(() => {
      setDriftKey(k => k + 1);
    }, 3600);

    const quoteInterval = setInterval(() => {
      setQuoteIndex(q => (q + 1) % catQuotes.length);
    }, 3200);

    return () => {
      clearInterval(driftInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  const handleCatClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuoteIndex(q => (q + 1) % catQuotes.length);
    const now = Date.now();
    const emojis = ['💖', '💕', '🐾', '✨', '🌻', '🌸'];
    const newItems = [
      { id: now, x: -25 + Math.random() * 50, y: -40 - Math.random() * 30, emoji: emojis[Math.floor(Math.random() * emojis.length)] },
      { id: now + 1, x: -35 + Math.random() * 70, y: -50 - Math.random() * 30, emoji: emojis[Math.floor(Math.random() * emojis.length)] },
      { id: now + 2, x: -20 + Math.random() * 40, y: -65 - Math.random() * 25, emoji: emojis[Math.floor(Math.random() * emojis.length)] },
    ];
    setCatHearts(prev => [...prev.slice(-6), ...newItems]);
    setTimeout(() => {
      setCatHearts(prev => prev.filter(item => item.id < now));
    }, 1200);
  };

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      {/* 0. Romantic Candlelight Heartbeat Glow */}
      <motion.div
        animate={{
          scale: [0.95, 1.16, 0.95],
          opacity: [0.22, 0.48, 0.22],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.8,
          ease: "easeInOut",
        }}
        className="absolute top-[22%] sm:top-[24%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-rose-200/40 via-amber-100/30 to-pink-200/20 blur-2xl pointer-events-none z-0"
      />

      {/* 1. Golden Sunflower Ring Halo centered in the upper section framing 'Hey you...' */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75, rotate: -20 }}
        animate={{
          opacity: 0.5,
          scale: [0.96, 1.03, 0.96],
          rotate: 360,
        }}
        transition={{
          opacity: { duration: 1 },
          scale: { repeat: Infinity, duration: 6, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 28, ease: "linear" },
        }}
        className="absolute top-[22%] sm:top-[24%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-76 sm:h-76 pointer-events-none z-0"
      >
        <img
          src="/assets/sunflower_ring.png"
          alt="Sunflower Ring"
          className="w-full h-full object-contain filter drop-shadow-sm mix-blend-multiply"
        />
      </motion.div>

      {/* 2. Top-Left Floating Sunflower */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: -20 }}
        animate={{
          opacity: 0.7,
          scale: 1,
          y: [0, -8, 0],
          rotate: [0, 6, -6, 0],
        }}
        transition={{
          opacity: { duration: 0.8 },
          y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 7, ease: "easeInOut" },
        }}
        className="absolute top-5 left-3 sm:top-7 sm:left-5 w-20 h-20 sm:w-24 sm:h-24 z-0"
      >
        <img
          src="/assets/sunflower1.png"
          alt="Floating Sunflower"
          className="w-full h-full object-contain filter drop-shadow-xs mix-blend-multiply"
        />
      </motion.div>

      {/* 3. Lower-Left Sunflower Bouquet framing the Cat */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, x: -25, y: 20 }}
        animate={{
          opacity: 0.85,
          scale: 1,
          x: 0,
          y: [0, -6, 0],
          rotate: [-6, 3, -6],
        }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          y: { repeat: Infinity, duration: 4.8, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 5.5, ease: "easeInOut" },
        }}
        className="absolute bottom-2 -left-3 sm:left-1 w-28 h-28 sm:w-36 sm:h-36 z-0"
      >
        <img
          src="/assets/sunflower3.png"
          alt="Sunflower Bouquet"
          className="w-full h-full object-contain filter drop-shadow-xs mix-blend-multiply"
        />
      </motion.div>

      {/* 4. Lower-Right Sunflower Bouquet framing the Cat */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, x: 25, y: 20 }}
        animate={{
          opacity: 0.85,
          scale: 1,
          x: 0,
          y: [0, 6, 0],
          rotate: [4, -5, 4],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.1 },
          scale: { duration: 0.8, delay: 0.1 },
          y: { repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.2 },
          rotate: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.2 },
        }}
        className="absolute bottom-2 -right-3 sm:right-1 w-28 h-28 sm:w-36 sm:h-36 z-0"
      >
        <img
          src="/assets/sunflower2.png"
          alt="Sunflower Peony Bouquet"
          className="w-full h-full object-contain filter drop-shadow-xs mix-blend-multiply"
        />
      </motion.div>

      {/* 5. Auto-playing Drifting Sunflower Transition across the slide */}
      <div className="absolute bottom-28 sm:bottom-32 inset-x-0 overflow-hidden pointer-events-none z-10 h-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={driftKey}
            initial={{ x: '-110%', opacity: 0, scale: 0.75, rotate: -10 }}
            animate={{
              x: ['-110%', '0%', '115%'],
              opacity: [0, 0.6, 0.5, 0],
              scale: [0.75, 1.05, 0.8],
              rotate: [-8, 0, 10],
            }}
            exit={{ x: '115%', opacity: 0 }}
            transition={{ duration: 2.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="flex items-center space-x-2 filter drop-shadow-sm">
              <img
                src={sunflowerAssets[driftKey % sunflowerAssets.length]}
                alt="Drifting Sunflower"
                className="w-11 h-11 sm:w-13 sm:h-13 object-contain mix-blend-multiply"
              />
              <span className="text-sm text-amber-400">✨</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 6. Ambient Floating Sparkles & Emojis */}
      {[
        { x: '20%', y: '16%', delay: 0.1, emoji: '✨' },
        { x: '82%', y: '20%', delay: 0.4, emoji: '💛' },
        { x: '14%', y: '58%', delay: 0.2, emoji: '🌻' },
        { x: '86%', y: '60%', delay: 0.5, emoji: '✨' },
        { x: '48%', y: '38%', delay: 0.3, emoji: '💖' },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{
            opacity: [0.15, 0.55, 0.15],
            scale: [0.85, 1.25, 0.85],
            y: [-6, 6, -6],
          }}
          transition={{
            opacity: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: item.delay },
            scale: { duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: item.delay },
            y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: item.delay },
          }}
          className="absolute text-sm sm:text-base filter drop-shadow-2xs select-none z-0"
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* 7. Interactive Cat with Live Cute Speech Bubble & Tap Hearts */}
      <div className="absolute bottom-2 sm:bottom-4 inset-x-0 flex flex-col items-center justify-end z-20 pointer-events-auto">
        {/* Floating Heart Bursts on Cat Tap */}
        <AnimatePresence>
          {catHearts.map(h => (
            <motion.span
              key={h.id}
              initial={{ opacity: 1, scale: 0.4, x: 0, y: 0 }}
              animate={{ opacity: 0, scale: 1.4, x: h.x, y: h.y }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="absolute pointer-events-none text-lg filter drop-shadow-xs z-30"
            >
              {h.emoji}
            </motion.span>
          ))}
        </AnimatePresence>

        {/* Cute Purr Speech Bubble over the Cat */}
        <motion.div
          key={quoteIndex}
          initial={{ opacity: 0, y: 8, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-rose-200/90 shadow-sm text-[11px] sm:text-[12px] font-sans text-rose-800 font-medium flex items-center gap-1.5 backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95 transition-transform"
          onClick={handleCatClick}
          title="Tap me! 🐾"
        >
          <span>💭</span>
          <span>{catQuotes[quoteIndex]}</span>
        </motion.div>

        {/* Enlarged Cat Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          whileTap={{ scale: 0.95, rotate: 2 }}
          className="cursor-pointer group flex flex-col items-center"
          onClick={handleCatClick}
          title="Tap the cat! 🐾"
        >
          <motion.img
            src="/assets/cat.png"
            alt="Cute Cat"
            animate={{
              y: [0, -7, 0],
              scale: [1, 1.025, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="w-52 h-52 sm:w-68 sm:h-68 md:w-76 md:h-76 max-w-[80vw] max-h-[40vh] object-contain filter drop-shadow-md pointer-events-none mix-blend-multiply"
          />
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Slide-specific background sunflower compositions.
 * Replaces previous cat animations with high-res watercolor sunflower illustrations
 * (sunflower1.png, sunflower2.png, sunflower3.png).
 * On the "Hey you..." slide, renders enlarged cat and rich auto-playing sunflower compositions.
 */
export function CatSlideBackground({
  currentIndex,
  direction,
  slideType,
  slideId,
}: CatBackgroundProps) {
  // On the "Hey you..." slide, render enlarged cat and animated sunflowers from assets
  if (slideId === 'intro-1' || currentIndex === 0) {
    return <HeyYouBackground />;
  }

  // Choose sunflower artwork compositions based on slide index
  const primarySunflower = sunflowerAssets[currentIndex % sunflowerAssets.length];
  const secondarySunflower = sunflowerAssets[(currentIndex + 1) % sunflowerAssets.length];
  const accentSunflower = sunflowerAssets[(currentIndex + 2) % sunflowerAssets.length];

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      {/* 1. Top Left Gentle Floating Sunflower */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          x: direction > 0 ? -30 : 30,
          y: -15,
        }}
        animate={{
          opacity: 0.35,
          scale: 1,
          x: 0,
          y: [0, -6, 0],
          rotate: [0, 4, -4, 0],
        }}
        transition={{
          opacity: { duration: 0.6 },
          scale: { duration: 0.6 },
          x: { duration: 0.6 },
          y: { repeat: Infinity, duration: 5.5, ease: 'easeInOut' },
          rotate: { repeat: Infinity, duration: 7, ease: 'easeInOut' },
        }}
        className="absolute top-6 left-3 w-24 h-24 sm:w-28 sm:h-28"
      >
        <img
          src={primarySunflower}
          alt="Sunflower decoration"
          className="w-full h-full object-contain filter drop-shadow-xs mix-blend-multiply"
        />
      </motion.div>

      {/* 2. Bottom Right Sunflower Bouquet */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          x: direction > 0 ? 30 : -30,
          y: 20,
        }}
        animate={{
          opacity: 0.4,
          scale: 1,
          x: 0,
          y: [0, 6, 0],
          rotate: [0, -3, 3, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.1 },
          scale: { duration: 0.6, delay: 0.1 },
          y: { repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 0.3 },
          rotate: { repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 0.3 },
        }}
        className="absolute bottom-6 right-3 w-28 h-28 sm:w-32 sm:h-32"
      >
        <img
          src={secondarySunflower}
          alt="Sunflower bouquet"
          className="w-full h-full object-contain filter drop-shadow-xs mix-blend-multiply"
        />
      </motion.div>

      {/* 3. Subtle Side Accent Sunflower */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: 0.28,
          scale: 1,
          y: [-4, 4, -4],
          rotate: [-2, 3, -2],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.2 },
          y: { repeat: Infinity, duration: 6.5, ease: 'easeInOut' },
          rotate: { repeat: Infinity, duration: 8.5, ease: 'easeInOut' },
        }}
        className="absolute top-[48%] -left-6 w-20 h-20 sm:w-24 sm:h-24"
      >
        <img
          src={accentSunflower}
          alt="Sunflower accent"
          className="w-full h-full object-contain filter drop-shadow-2xs mix-blend-multiply"
        />
      </motion.div>

      {/* 4. Ambient Golden Sparkles & Floating Petals */}
      {[
        { x: '18%', y: '26%', delay: 0.1, emoji: '✨' },
        { x: '82%', y: '34%', delay: 0.3, emoji: '💛' },
        { x: '24%', y: '68%', delay: 0.5, emoji: '✨' },
        { x: '76%', y: '72%', delay: 0.2, emoji: '🌸' },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{
            opacity: [0.12, 0.35, 0.12],
            scale: [0.9, 1.15, 0.9],
            y: [-5, 5, -5],
          }}
          transition={{
            opacity: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: item.delay },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: item.delay },
            y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: item.delay },
          }}
          className="absolute text-sm sm:text-base filter drop-shadow-2xs select-none"
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Animated sunflower drift transition whenever a slide changes.
 * Replaces cat scamper with drifting golden watercolor sunflowers.
 */
export function CatTransitionScamper({
  currentIndex,
  direction,
}: {
  currentIndex: number;
  direction: number;
}) {
  // On slide 0, no transition across the cat
  if (currentIndex === 0) return null;

  const transitionImg = sunflowerAssets[currentIndex % sunflowerAssets.length];

  return (
    <div className="absolute bottom-5 left-0 right-0 pointer-events-none select-none z-10 overflow-hidden h-14">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={`sunflower-drift-${currentIndex}`}
          custom={direction}
          initial={{
            x: direction >= 0 ? '115%' : '-115%',
            opacity: 0,
            scale: 0.75,
            rotate: direction >= 0 ? -12 : 12,
          }}
          animate={{
            x: direction >= 0 ? ['100%', '0%', '-115%'] : ['-100%', '0%', '115%'],
            opacity: [0, 0.45, 0.35, 0],
            scale: [0.8, 1.05, 0.85],
            rotate: direction >= 0 ? [-8, 0, 8] : [8, 0, -8],
          }}
          exit={{
            x: direction >= 0 ? '-115%' : '115%',
            opacity: 0,
            scale: 0.7,
          }}
          transition={{
            duration: 0.85,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="flex items-center space-x-2">
            <img
              src={transitionImg}
              alt="Floating Sunflower"
              className="w-10 h-10 object-contain filter drop-shadow-xs mix-blend-multiply"
            />
            <span className="text-xs text-amber-400 opacity-60">✨</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
