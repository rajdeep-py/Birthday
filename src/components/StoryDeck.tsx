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
      className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex flex-col items-center pointer-events-auto cursor-pointer select-none group"
      initial={{ opacity: 0, scale: 0.8, y: -8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.15, rotate: 6 }}
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

      {/* Sunflower Artwork with No Background Frame */}
      <div className="relative p-1">
        <motion.img
          key={activeSunflower}
          src={activeSunflower}
          alt="Sunflower"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter drop-shadow-sm select-none"
          animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.04, 1] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        />
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute -top-1 -right-1 text-xs opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none"
        >
          ✨
        </motion.span>
      </div>
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
    deck.push({
      id: 'intro-2',
      type: 'text',
      content: "Think you can hide anything from me?\nLet's test how well I know every little secret about you.",
      subtext: "Spoiler: I notice everything. Especially you. 🌻"
    });

    config.riddles.forEach((_, i) => {
      deck.push({ id: `riddle-${i}`, type: 'riddle', index: i });
    });

    deck.push({
      id: 'riddle-end-1',
      type: 'text',
      content: "Okay... maybe I'm a little hopelessly obsessed with you. ❤️",
      subtext: "Score: 100% in loving you 🤭"
    });
    deck.push({
      id: 'riddle-end-2',
      type: 'text',
      content: "But knowing little facts about you isn't even my favourite part.",
      subtext: "Guess what is? ➔"
    });
    deck.push({
      id: 'riddle-end-3',
      type: 'text',
      content: "My favourite part is living every single memory with you.\n\nEvery glance. Every laugh. Every ordinary moment.",
      subtext: "Ready to walk down memory lane? 🥺❤️"
    });

    deck.push({
      id: 'mem-title',
      type: 'text',
      content: "Our Memories ❤️",
      heading: true,
      subtext: "The sacred timeline of how I fell for you"
    });
    config.memories.forEach((_, i) => {
      deck.push({ id: `memory-${i}`, type: 'memory', index: i });
    });

    deck.push({
      id: 'photo-title',
      type: 'text',
      content: "Pieces of Us 📸",
      heading: true,
      subtext: "Moments frozen forever in my heart"
    });
    config.photos.forEach((_, i) => {
      deck.push({ id: `photo-${i}`, type: 'photo', index: i });
    });

    deck.push({
      id: 'love-title',
      type: 'text',
      content: "Things I Love About You",
      heading: true,
      subtext: "Just 8 of the million reasons why it's always been you"
    });
    config.loveNotes.forEach((_, i) => {
      deck.push({ id: `note-${i}`, type: 'note', index: i });
    });

    deck.push({
      id: 'side-1',
      type: 'text',
      content: "There is a side of you that not everyone gets to see.",
      subtext: "The real you."
    });
    deck.push({
      id: 'side-2',
      type: 'text',
      content: "Ambitious. Fierce. Sometimes stubbornly moody.\nSometimes childish. Sometimes silent.\nSometimes endlessly, wonderfully talkative.",
      subtext: "And every single version is breathtaking."
    });
    deck.push({
      id: 'side-3',
      type: 'text',
      content: "Underneath all your walls is someone capable of loving deeply, hurting deeply, and trusting with her whole heart.",
      subtext: "A heart made of gold."
    });
    deck.push({
      id: 'side-4',
      type: 'text',
      content: "I know the world doesn't always get to see this version of you.\n\nAnd every single day, I thank the universe that I do.",
      subtext: "accha re thik ache ❤️"
    });

    deck.push({
      id: 'trust-1',
      type: 'text',
      content: "You know almost every single detail of my life.",
      subtext: "Nothing held back."
    });
    deck.push({
      id: 'trust-2',
      type: 'text',
      content: "And somehow, in a world full of noise, I am the person you trust with your deepest truths.",
      subtext: "That means everything to me."
    });
    deck.push({
      id: 'trust-3',
      type: 'text',
      content: "That trust is the most sacred gift anyone has ever given me.\n\nI promise I will never, ever take it for granted.",
      subtext: "I swear on my heart."
    });
    deck.push({
      id: 'trust-4',
      type: 'text',
      content: "Because being trusted by you means more to me than you could ever possibly realize.",
      subtext: "You are my safe haven."
    });

    deck.push({
      id: 'silence-1',
      type: 'text',
      content: "Sometimes you don't tell me what's wrong.",
      subtext: "You carry it alone."
    });
    deck.push({
      id: 'silence-2',
      type: 'text',
      content: "You just go quiet.\nYou pull back.",
      subtext: "I feel the silence immediately."
    });
    deck.push({
      id: 'silence-3',
      type: 'text',
      content: "You don't explain.\nYou don't ask for help.",
      subtext: "You just stay quiet."
    });
    deck.push({
      id: 'silence-4',
      type: 'text',
      content: "You don't have to explain.\nYou never have to pretend with me.",
      subtext: "Just breathe."
    });
    deck.push({
      id: 'silence-5',
      type: 'text',
      content: "Because I will always notice.\nI will always see right through your silence.",
      subtext: "Every single time."
    });
    deck.push({
      id: 'silence-6',
      type: 'text',
      content: "And no matter how heavy the quiet gets...\n\nI will always be right beside you.",
      subtext: "You never have to be alone again. ❤️"
    });

    deck.push({ id: 'hug', type: 'hug' });

    deck.push({
      id: 'surprise-1',
      type: 'text',
      content: "I've spent this entire website talking about little things I know about you."
    });
    deck.push({
      id: 'surprise-2',
      type: 'text',
      content: "Your favourite flower.\nYour favourite food.\nThe ghats we visited.\nThe laughs we shared.\nThe silence we held."
    });
    deck.push({
      id: 'surprise-3',
      type: 'text',
      content: "But there's one thing a million riddles and memories can never fully explain...",
      subtext: "Are you ready? 🥺"
    });
    deck.push({
      id: 'surprise-4',
      type: 'text',
      content: "What you truly mean to my heart.",
      heading: true,
      subtext: "Everything. Absolutely everything."
    });

    deck.push({
      id: 'bday-reveal',
      type: 'text',
      content: `Happy Birthday,\nMy Sunflower 🌻❤️`,
      heading: true,
      subtext: "🎂 ❤️ 🌻 🎀 ✨ 🥹"
    });

    const chunks = config.birthdayMessage.split('\n\n');
    chunks.forEach((c, i) => {
      deck.push({ id: `bday-chunk-${i}`, type: 'text', content: c, align: 'left' });
    });

    deck.push({
      id: 'final-1',
      type: 'text',
      content: "One last promise before we finish...",
      subtext: "Listen closely ❤️"
    });
    deck.push({
      id: 'final-2',
      type: 'text',
      content: "You sometimes secretly worry that one day I'll forget you.",
      subtext: "You think time fades things."
    });
    deck.push({
      id: 'final-3',
      type: 'text',
      content: "I won't.",
      heading: true,
      subtext: "Not in this lifetime, not in any other."
    });
    deck.push({
      id: 'final-4',
      type: 'text',
      content: "Not the girl I met.\nNot the girl who trusted me.\nNot the woman you are blooming into.",
      subtext: "Every chapter of you is sacred."
    });
    deck.push({
      id: 'final-5',
      type: 'text',
      content: `Happy Birthday, Beautiful. 🌻❤️`,
      heading: true,
      subtext: "May all your dreams come true"
    });
    deck.push({
      id: 'final-6',
      type: 'text',
      content: "I love you. Today, tomorrow, and forever.",
      subtext: "Endless love, always yours."
    });

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

  // Auto-play on the 'Hey you' slide to advance automatically unless the user navigates sooner
  useEffect(() => {
    if (currentIndex !== 0) return;
    const timer = setTimeout(() => {
      handleNext();
    }, 15500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

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

      <div className={`relative w-full h-[100svh] sm:h-full sm:max-h-[850px] sm:max-w-[420px] ${isHeyYouSlide ? 'bg-white sm:border-gray-50' : 'bg-[#FFFCF8] sm:border-white'
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
              className={`absolute inset-0 flex items-center justify-center p-6 sm:p-8 pointer-events-none ${isHeyYouSlide ? 'bg-white' : ''
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
