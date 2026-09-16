import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * A cute loader overlay that shows while an image is loading.
 * Displays a waving hand emoji with a fun Bangla-English message.
 */
export function ImageLoader({ isLoading, isDark = false }: { isLoading: boolean; isDark?: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className={`absolute inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-sm rounded-xl p-4 select-none ${
            isDark
              ? 'bg-black/85 text-white border border-neutral-800'
              : 'bg-gradient-to-br from-rose-50/95 via-white/90 to-pink-50/95'
          }`}
        >
          {/* Bouncing hand emoji */}
          <motion.span
            animate={{
              y: [0, -10, 0],
              rotate: [0, 14, -14, 10, -6, 0],
            }}
            transition={{
              y: { repeat: Infinity, duration: 1.2, ease: 'easeInOut' },
              rotate: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
            }}
            className="text-5xl sm:text-6xl filter drop-shadow-md select-none mb-3"
          >
            ✋
          </motion.span>

          {/* Main message */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className={`font-serif text-[13px] sm:text-[14.5px] text-center leading-snug max-w-[270px] px-3 font-medium ${
              isDark ? 'text-neutral-200' : 'text-gray-800'
            }`}
          >
            tried my best but bc of low funds, could'nt afford to buy a server,
          </motion.p>

          {/* Fun Bangla-English line */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className={`font-sans text-[11.5px] sm:text-[12.5px] text-center leading-relaxed max-w-[260px] mt-2 px-2 font-semibold ${
              isDark ? 'text-amber-300' : 'text-rose-600'
            }`}
          >
            so please ektu dariye jaa, load hoccheee daraaa pleaseee 🥺🙏
          </motion.p>

          {/* Animated loading dots */}
          <motion.div
            className="flex gap-1.5 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
                className="w-2 h-2 rounded-full bg-rose-400"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * A wrapper around <img> that shows the ImageLoader until the image is fully loaded.
 * Pass all standard img props plus optional loaderClassName for the container.
 */
export function LoadedImage({
  src,
  alt,
  className,
  containerClassName,
  onLoad: externalOnLoad,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  containerClassName?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setLoaded(true);
    if (externalOnLoad) {
      externalOnLoad(e);
    }
  };

  return (
    <div className={`relative ${containerClassName || ''}`}>
      <ImageLoader isLoading={!loaded} />
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={handleLoad}
        {...rest}
      />
    </div>
  );
}
