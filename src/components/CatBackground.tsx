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

/**
 * Slide-specific background sunflower compositions.
 * Replaces previous cat animations with high-res watercolor sunflower illustrations
 * (sunflower1.png, sunflower2.png, sunflower3.png).
 * On the "Hey you..." slide, keeps ONLY /public/assets/cat.png at the bottom.
 */
export function CatSlideBackground({
  currentIndex,
  direction,
  slideType,
  slideId,
}: CatBackgroundProps) {
  // On the "Hey you..." slide, keep ONLY /public/assets/cat.png at the bottom
  if (slideId === 'intro-1' || currentIndex === 0) {
    return (
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="absolute bottom-4 sm:bottom-6 inset-x-0 flex justify-center items-end"
        >
          <motion.img
            src="/assets/cat.png"
            alt="Cute Cat"
            animate={{ y: [0, -3.5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-36 h-36 sm:w-44 sm:h-44 object-contain filter drop-shadow-sm pointer-events-none mix-blend-multiply"
          />
        </motion.div>
      </div>
    );
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
