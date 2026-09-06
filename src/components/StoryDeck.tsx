import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { config } from '../config';
import { TextSlide, RiddleSlide, MemorySlide, PhotoSlide, VideoSlide, NoteSlide, HugSlide } from './Slides';
import { CatSlideBackground, CatTransitionScamper } from './CatBackground';

type SlideDef = {
  id: string;
  type: 'text' | 'riddle' | 'memory' | 'photo' | 'video' | 'note' | 'hug';
  content?: string;
  align?: 'center' | 'left';
  heading?: boolean;
  index?: number;
  subtext?: string;
};

const stampSunflowerList = [
  '/assets/sunflower2.png',
  '/assets/sunflower1.png',
  '/assets/sunflower3.png',
];

function SunflowerStamp({
  currentIndex,
  isHeyYouSlide,
}: {
  currentIndex: number;
  isHeyYouSlide?: boolean;
}) {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; emoji: string }[]>([]);

  // On the "Hey you" slide, use sunflower2.png; on other slides cycle through sunflower1, sunflower2, sunflower3
  const activeSunflower = isHeyYouSlide
    ? '/assets/sunflower2.png'
    : stampSunflowerList[currentIndex % stampSunflowerList.length];

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const id = Date.now();
    const emojis = ['✨', '💛', '🌸', '✨', '💖'];
    const newSparkles = [
      { id: id, x: -14 + Math.random() * 28, y: -20 - Math.random() * 18, emoji: emojis[Math.floor(Math.random() * emojis.length)] },
      { id: id + 1, x: -20 + Math.random() * 40, y: -25 - Math.random() * 22, emoji: emojis[Math.floor(Math.random() * emojis.length)] },
    ];
    setSparkles(prev => [...prev.slice(-6), ...newSparkles]);
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== id && s.id !== id + 1));
    }, 1200);
  };

  return (
    <motion.div
      className="absolute top-5 right-5 sm:top-7 sm:right-6 z-30 flex flex-col items-center pointer-events-auto cursor-pointer select-none group"
      initial={{ opacity: 0, scale: 0.8, y: -8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.14, rotate: 6 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      onClick={handleClick}
      title="A sunflower for my sunflower (Tap me!)"
    >
      {/* Floating Sparkles when clicked */}
      <AnimatePresence>
        {sparkles.map(s => (
          <motion.span
            key={s.id}
            initial={{ opacity: 1, scale: 0.4, x: 0, y: 0 }}
            animate={{ opacity: 0, scale: 1.25, x: s.x, y: s.y }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute pointer-events-none text-base filter drop-shadow-xs"
          >
            {s.emoji}
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Postage Stamp Box with Sunflower Artwork */}
      <div className="w-12 h-14 sm:w-13 sm:h-15 border-2 border-dashed border-amber-300/80 bg-amber-50/90 rounded-sm shadow-sm flex items-center justify-center p-1 backdrop-blur-xs relative transition-colors group-hover:bg-amber-100/95 group-hover:border-amber-400">
        <motion.img
          key={activeSunflower}
          src={activeSunflower}
          alt="Sunflower Stamp"
          className="w-8 h-8 sm:w-9 sm:h-9 object-contain filter drop-shadow-xs select-none mix-blend-multiply"
          animate={{ rotate: [0, 4, -4, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
        <span className="absolute -top-1 -right-1 text-[10px] opacity-80 group-hover:opacity-100 transition-opacity">
          ✨
        </span>
      </div>
      <span className="font-sans text-[7.5px] tracking-widest uppercase mt-1 text-amber-700/80 font-medium">
        Sunflower
      </span>
    </motion.div>
  );
}

export default function StoryDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [unlocked, setUnlocked] = useState<Record<number, boolean>>({});

  const slides = useMemo(() => {
    const deck: SlideDef[] = [];

    deck.push({ id: 'intro-1', type: 'text', content: "Hey you..." });
    deck.push({ id: 'intro-2', type: 'text', content: "Let's see how well I know you." });

    config.riddles.forEach((_, i) => {
      deck.push({ id: `riddle-${i}`, type: 'riddle', index: i });
    });

    deck.push({ id: 'riddle-end-1', type: 'text', content: "Okay... maybe I do know you pretty well. ❤️" });
    deck.push({ id: 'riddle-end-2', type: 'text', content: "But knowing little things about you isn't my favourite part." });
    deck.push({ id: 'riddle-end-3', type: 'text', content: "My favourite part is remembering the moments we lived." });

    deck.push({ id: 'mem-title', type: 'text', content: "Our Memories ❤️", heading: true });
    config.memories.forEach((_, i) => {
      deck.push({ id: `memory-${i}`, type: 'memory', index: i });
    });

    deck.push({ id: 'photo-title', type: 'text', content: "Pieces of Us 📸", heading: true });
    config.photos.forEach((_, i) => {
      deck.push({ id: `photo-${i}`, type: 'photo', index: i });
    });

    if (config.videos.length > 0) {
      deck.push({ id: 'video-title', type: 'text', content: "Some memories move.", heading: true });
      config.videos.forEach((_, i) => {
        deck.push({ id: `video-${i}`, type: 'video', index: i });
      });
    }

    deck.push({ id: 'love-title', type: 'text', content: "Things I Love About You", heading: true });
    config.loveNotes.forEach((_, i) => {
      deck.push({ id: `note-${i}`, type: 'note', index: i });
    });

    deck.push({ id: 'side-1', type: 'text', content: "There is a side of you that not everyone gets to see." });
    deck.push({ id: 'side-2', type: 'text', content: "Ambitious. Strong. Sometimes stubborn.\nSometimes childish. Sometimes quiet.\nSometimes endlessly talkative." });
    deck.push({ id: 'side-3', type: 'text', content: "But underneath all that is someone capable of loving deeply and trusting deeply." });
    deck.push({ id: 'side-4', type: 'text', content: "I don't think everyone gets to see this version of you.\n\nAnd I'm grateful that I do.", subtext: "accha re thik ache ❤️" });

    deck.push({ id: 'trust-1', type: 'text', content: "You know almost every detail of my life." });
    deck.push({ id: 'trust-2', type: 'text', content: "And somehow, I'm the person you can trust with almost anything." });
    deck.push({ id: 'trust-3', type: 'text', content: "That's something I never want to take for granted." });
    deck.push({ id: 'trust-4', type: 'text', content: "Because being trusted by you means more to me than you probably realize." });

    deck.push({ id: 'silence-1', type: 'text', content: "Sometimes you don't tell me what's wrong." });
    deck.push({ id: 'silence-2', type: 'text', content: "You just go quiet." });
    deck.push({ id: 'silence-3', type: 'text', content: "You don't explain." });
    deck.push({ id: 'silence-4', type: 'text', content: "You don't have to." });
    deck.push({ id: 'silence-5', type: 'text', content: "Because I'll still notice." });
    deck.push({ id: 'silence-6', type: 'text', content: "And I'll still be there." });

    deck.push({ id: 'hug', type: 'hug' });

    deck.push({ id: 'surprise-1', type: 'text', content: "I've spent this whole website talking about little things I know about you." });
    deck.push({ id: 'surprise-2', type: 'text', content: "Your favourite flower.\nYour favourite colours.\nThe things you like.\nThe things you do.\nThe memories we've made." });
    deck.push({ id: 'surprise-3', type: 'text', content: "But there's one thing I don't think a riddle can ever explain." });
    deck.push({ id: 'surprise-4', type: 'text', content: "What you mean to me.", heading: true });

    deck.push({ id: 'bday-reveal', type: 'text', content: `Happy Birthday,\n${config.girlfriendName} ❤️`, heading: true, subtext: "🎂 ❤️ 🌻 🎀 ✨ 🥹" });

    const chunks = config.birthdayMessage.split('\n\n');
    chunks.forEach((c, i) => {
      deck.push({ id: `bday-chunk-${i}`, type: 'text', content: c, align: 'left' });
    });

    deck.push({ id: 'final-1', type: 'text', content: "One last thing..." });
    deck.push({ id: 'final-2', type: 'text', content: "You sometimes think I'll forget you." });
    deck.push({ id: 'final-3', type: 'text', content: "I won't.", heading: true });
    deck.push({ id: 'final-4', type: 'text', content: "Not the little things.\nNot the big things.\nNot the girl I met.\nNot the girl you're becoming." });
    deck.push({ id: 'final-5', type: 'text', content: `Happy Birthday, sunflower. 🌻❤️`, heading: true });
    deck.push({ id: 'final-6', type: 'text', content: "I love you." });

    return deck;
  }, []);

  const currentSlide = slides[currentIndex];
  
  const canAdvance = () => {
    if (currentSlide.type === 'riddle' && !unlocked[currentIndex]) return false;
    if (currentSlide.type === 'hug' && !unlocked[currentIndex]) return false;
    return true;
  };

  const handleNext = () => {
    if (!canAdvance()) return;
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const unlockCurrent = () => {
    setUnlocked(prev => ({ ...prev, [currentIndex]: true }));
  };

  const handleForceNext = () => {
    setUnlocked(prev => ({ ...prev, [currentIndex]: true }));
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, unlocked]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      rotateY: dir > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      rotateY: dir < 0 ? 15 : -15,
    })
  };

  const renderSlide = (slide: SlideDef) => {
    switch (slide.type) {
      case 'text':
        return <TextSlide slide={slide} />;
      case 'riddle':
        return (
          <RiddleSlide
            key={slide.id}
            index={slide.index!}
            onUnlock={unlockCurrent}
            onNext={handleForceNext}
          />
        );
      case 'memory':
        return <MemorySlide index={slide.index!} />;
      case 'photo':
        return <PhotoSlide index={slide.index!} />;
      case 'video':
        return <VideoSlide index={slide.index!} />;
      case 'note':
        return <NoteSlide index={slide.index!} />;
      case 'hug':
        return <HugSlide onUnlock={unlockCurrent} onNext={handleForceNext} />;
      default:
        return null;
    }
  };

  const isHeyYouSlide = currentSlide?.id === 'intro-1';

  return (
    <div className="fixed inset-0 bg-[#F5F2EB] flex items-center justify-center sm:p-6 overflow-hidden">
      
      <div className={`relative w-full h-[100svh] sm:h-full sm:max-h-[850px] sm:max-w-[420px] ${
        isHeyYouSlide ? 'bg-white sm:border-gray-50' : 'bg-[#FFFCF8] sm:border-white'
      } sm:rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col perspective-1000 sm:border-8 overflow-hidden transition-colors duration-400`}>
        
        {/* Sleek Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 z-30 sm:rounded-t-3xl overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-300 via-red-400 to-blue-400"
            initial={{ width: 0 }}
            animate={{ width: `${(currentIndex / (slides.length - 1)) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Sunflower Stamp at Top Right Corner */}
        <SunflowerStamp currentIndex={currentIndex} isHeyYouSlide={isHeyYouSlide} />

        {/* Cat Emoji Scamper Transition Across Background on Slide Change */}
        <CatTransitionScamper currentIndex={currentIndex} direction={direction} />

        {/* Tap Zones for Navigation - Lower Z-Index */}
        <div className="absolute inset-0 z-10 flex pointer-events-none">
          <div 
            className="w-1/3 h-full pointer-events-auto" 
            onClick={handlePrev}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          />
          <div 
            className="w-2/3 h-full pointer-events-auto" 
            onClick={handleNext}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          />
        </div>

        {/* Slide Content - Higher Z-Index but pointer-events-none to let clicks pass through */}
        <div className="flex-1 relative overflow-hidden z-20 pointer-events-none">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className={`absolute inset-0 flex items-center justify-center p-6 sm:p-8 pointer-events-none ${
                isHeyYouSlide ? 'bg-white' : ''
              }`}
              style={{ transformOrigin: direction > 0 ? 'right center' : 'left center' }}
            >
              {/* Cat Emojis as Background Transitions for each slide */}
              <CatSlideBackground
                currentIndex={currentIndex}
                direction={direction}
                slideType={currentSlide.type}
                slideId={currentSlide.id}
              />

              <div className="relative z-10 w-full flex items-center justify-center">
                {renderSlide(currentSlide)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
}
