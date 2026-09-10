# 🌻 Sunflower • A Birthday Story Deck for Rikta

An interactive, cinematic digital story deck and personalized birthday celebration web application crafted with love. Built with modern web animations, glassmorphism, background music, playful riddles, memory timelines, and heartfelt interactive promises.

---

## 📖 About The Project

This website is a modern, mobile-first interactive experience designed like an immersive story deck. It takes the viewer through an intimate, heartfelt journey celebrating memories, shared jokes, mutual trust, and quiet moments.

### ✨ Key Features & Experience

- **🌻 Interactive Riddle Minigames**: 9 personalized trivia riddles that test memories, favorite foods (Biriyani!), habits, and little secrets, complete with celebratory sunflower sparkles and anti-skip debounce logic.
- **📸 Memory Timeline & Photo Album**: A curated chronological walk down memory lane—from school days and Bagbazar Ghat river breezes to sunset ferry rides across the Ganga and wholesome late-night talks.
- **🐱 Favorite Versions of Her (Situational Slides)**: Playful and aesthetic breakdowns of her moods—from cat whisperer mode and saree elegance to her quiet soul hours and 300-words-per-minute chatterbox energy.
- **🫂 Interactive Virtual Hug**: A multi-step interactive hug counter that lets the viewer squeeze tighter and receive sweet reactions.
- **🤞 Pinky Promise Slide**: A dedicated interactive promise card where she can tap to seal a lifelong promise:
  > *"No matter how distant we become, if life ever gets too heavy, you’ll still feel like you can call me. I may not be a part of your everyday life, but I’ll always want to know you’re okay."*
- **🎨 "My Creation" Fullscreen Finale**: A stunning final artwork showcase with translucent typography and a double-click restart mechanism that smoothly restarts the journey.
- **🎵 Seamless Ambient Background Music**: Global background audio player (`/assets/song.mp3`) with an animated soundwave equalizer, auto-looping, and play/pause controls.
- **🐱 Scampering Cat & Sunflower Micro-Animations**: Whimsical cat transition animations and interactive floating sunflower stamps across slide switches.

---

## 💌 For Whom & By Whom

- **For Whom**: Dedicated to **Rikta** (fondly called *"Sunflower"* 🌻 & *"Beautiful"*), celebrating her birthday, her strength, her laughter, and every version of her.
- **By Whom**: Designed and developed with love by **Rajdeep** ([@rajdeep-py](https://github.com/rajdeep-py)).

---

## 🛠️ Tech Stack

- **Frontend Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Animations & Motion**: [Motion (Framer Motion 12)](https://motion.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphism CSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio Engine**: HTML5 Audio with cross-slide persistence and state control

---

## 📁 File Structure

```text
birthday/
├── public/
│   └── assets/                     # Media assets, photos, music & stickers
│       ├── AMRA_DUJON.png          # Couple memory photo
│       ├── cat.png                 # Cat sticker & scamper illustrations
│       ├── cat_lover.png           # Situation photo: Cat whisperer
│       ├── couple_perfect.png      # Polaroid memory picture
│       ├── couple_selfie.png       # Bagbazar Ghat sunset photo
│       ├── couple_selfie_2nd.png   # Casual hangout photo
│       ├── cute_pic.png            # Saree golden hour picture
│       ├── eating_paglu.png        # Biriyani & foodie moment
│       ├── ferry_ride_single.png   # Ferry ride on Ganga memory
│       ├── friends_reunion.png     # Friends gathering photo
│       ├── group.png               # Reunion group photo
│       ├── my_creation.png         # Full-screen finale artwork
│       ├── pout_selfie.jpeg        # Silly expressions memory
│       ├── random_meetup1.png      # School days memory photo
│       ├── selfie.png              # Close-up smile photo
│       ├── song.mp3                # Continuous background music track
│       ├── soothing_ghat.png       # Bagbazar Ghat river view
│       ├── soothing_single.png     # River breeze memory
│       ├── sunflower1.png          # Floating sunflower celebrate asset 1
│       ├── sunflower2.png          # Floating sunflower celebrate asset 2
│       ├── sunflower3.png          # Floating sunflower celebrate asset 3
│       ├── sunflower_ring.png      # Sunflower ring accent
│       └── wp_ss.jpeg              # Late-night chat memory screenshot
├── src/
│   ├── components/
│   │   ├── CatBackground.tsx       # Animated playful cat background & scamper transitions
│   │   ├── Slides.tsx              # All slide components (Riddles, Hug, Promise, Memories, etc.)
│   │   └── StoryDeck.tsx           # Main story controller, tap zones, audio player, & slide deck state
│   ├── App.tsx                     # Top-level application container
│   ├── config.ts                   # Central data store (riddles, memories, love notes, letters)
│   ├── index.css                   # Global styles, fonts, and Tailwind utilities
│   └── main.tsx                    # React application root entry point
├── index.html                      # HTML shell & font definitions
├── package.json                    # Project dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite build and plugin configurations
└── README.md                       # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** / **pnpm**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rajdeep-py/Birthday.git
   cd Birthday
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Production Build

To bundle the application for production:
```bash
npm run build
```
The output will be generated inside the `dist/` directory, ready to deploy to Vercel, Netlify, or GitHub Pages.

---

## 🌻 Notes & Dedication

> *"No matter how distant we become, if life ever gets too heavy, you’ll still feel like you can call me. I may not be a part of your everyday life, but I’ll always want to know you’re okay."*
