# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vite + React + TypeScript showcase website for the Interview Coder desktop application. The site features an animated shader background, GSAP text animations, and demonstrates the desktop app's features. It's built as a promotional landing page with Chinese content targeting users preparing for online technical interviews.

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server (runs on http://localhost:5173)
- `npm run build` - Build for production (runs TypeScript compilation then Vite build)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Architecture

### Core Technologies
- **React 19** + TypeScript with Vite 7 as build tool
- **React Router** for client-side routing (home page and features page)
- **Tailwind CSS v4** for styling with custom CSS variables
- **three.js** ecosystem (@react-three/fiber, @react-three/drei) for 3D shader backgrounds
- **GSAP** + split-type for sophisticated text animations
- **tw-animate-css** for additional animation utilities

### Project Structure
```
src/
├── components/
│   ├── demo/DemoShowcase.tsx     # Home page wrapper combining Hero + DownloadSection
│   ├── hero/Hero.tsx             # Main hero component with text animations
│   ├── download/DownloadSection.tsx # Call-to-action download section
│   └── shader/ShaderBackground.tsx # Three.js animated shader background
├── lib/gsap.ts                   # GSAP configuration and React hook integration
├── pages/FeaturesPage.tsx        # Features showcase page
├── App.tsx                       # Router configuration and page routes
└── main.tsx                      # React app initialization
```

### Key Architectural Patterns

**Component Composition**: The main page (`DemoShowcase`) combines `Hero` and `DownloadSection` components. The `Hero` component is highly configurable via props for title, description, CTA buttons, and micro-details.

**Animation System**: GSAP is centralized in `src/lib/gsap.ts` with proper React hook registration. The `Hero` component uses `useGSAP` hook with `SplitType` for sophisticated text animations that handle font loading and cleanup.

**3D Background**: `ShaderBackground` uses a complex CPPN (Compositional Pattern-Producing Networks) shader rendered via React Three Fiber. The shader creates animated, organic-looking patterns that serve as the visual backdrop.

**Routing**: Simple React Router setup with two routes - home (`/`) and features (`/features`).

**Styling**: Tailwind CSS v4 with CSS variables for theming. Uses a dark theme with semi-transparent glassmorphism effects.

## Configuration Files

- **vite.config.ts**: Standard Vite config with React plugin and path alias (`@` → `src/`)
- **tsconfig.json**: Project references setup separating app and node configs
- **tailwind.config.ts**: Extensive Tailwind configuration with CSS variable integration

## Development Notes

- The project uses path aliases (`@/`) for imports
- GSAP animations are performance-optimized with proper cleanup
- The shader background is computationally intensive but cached
- Text animations use `SplitType` for line-by-line animation effects
- All Chinese text should be preserved as-is when making changes
- The build process includes TypeScript compilation before Vite bundling