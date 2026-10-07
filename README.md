# Tulas International School (TIS) - Homepage Redesign

An animated rebuild of the [Tulas International School](https://tis.edu.in/) homepage. It keeps the original brand look (red-orange and teal, serif headlines with red italic accents, circular student photos) and all of the original copy, and adds smooth motion, dark mode and full mobile responsiveness.

## 🚀 Live Demo
- **Live URL:** [Insert Vercel / Netlify Link Here]
- **Repository:** [Insert GitHub Repo Link Here]

## 🛠️ Tech Stack
- **Framework:** React 18 + Vite
- **Styling:** CSS Modules (design tokens as CSS variables in `src/styles/global.css`)
- **Animations:** Framer Motion + CSS keyframes (logo ticker)
- **Icons:** Lucide React
- **Deployment:** Vercel / Netlify

## ✨ Standout Features Implemented
All four optional features are built:

1. **Custom Cursor** (`animation/CustomCursor`): spring-smoothed ring and dot that grow over links, buttons, inputs and anything marked `data-cursor`. Position lives in Framer Motion values, so moving the mouse causes no React re-renders. Not rendered on touch devices (`hover: hover` and `pointer: fine`).
2. **Scroll-Triggered Reveals** (`ui/Reveal`): `RevealGroup` / `RevealItem` use `whileInView` with `once: true` and a staggered 0.5s entrance.
3. **Animated Dark/Light Theme Switcher** (`animation/ThemeToggle` + `hooks/useTheme`): spring-animated switch with a rotating sun/moon icon. Saved in `localStorage`, follows the OS setting on first visit, and an inline script in `index.html` prevents a flash of the wrong theme.
4. **Scroll Progress Bar** (`animation/ScrollProgress`): `useScroll` + `useSpring`, animated with `scaleX` only.

Other interactions: hero photo pairs that swap in circles with a self-drawing underline, parallax full-bleed story panels, count-up stats, dropdown navigation, animated mobile drawer, scroll-snap rails with arrows, and the "Enquire Now" popup with validation.

## 🗂️ Project Structure
```
src/
├── components/
│   ├── ui/          # Button, SafeImage, Reveal, CountUp, Rail
│   ├── layout/      # Navbar, MobileNav, FloatingActions, EnquireModal, Footer
│   ├── sections/    # Hero, Voices, Sports, Story, Secret, Stats, Rankings,
│   │                # Community, Recognition, Parents, Reviews, Collaborations
│   └── animation/   # ScrollProgress, CustomCursor, ThemeToggle
├── hooks/           # useTheme, useFinePointer
├── data/            # content.js, people.js (all copy and media URLs)
└── styles/          # global.css (tokens, resets, focus styles)
```

## ♿ Accessibility & Performance
- Semantic landmarks, skip link, visible focus rings, labelled form fields with `role="alert"` errors.
- Dialogs close on Escape, lock page scroll and return focus to the opener.
- `MotionConfig reducedMotion="user"` plus a CSS media query respect "reduce motion"; the hero timer is disabled too.
- 44-48px touch targets. Animations use `transform` / `opacity` only.
- Images are lazy-loaded; each falls back to a styled placeholder if a remote file fails (`SafeImage`). Parent videos use `preload="none"`.

## 📦 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build && npm run preview
   ```

## 🌐 Deployment
- **Vercel / Netlify:** import the repo. Build command `npm run build`, output directory `dist`.
- **GitHub Pages:** set `base: '/<repo-name>/'` in `vite.config.js`, then publish `dist`.

## 📝 Notes
- Photos and videos are hot-linked from `tis.edu.in`. For production, download them into `public/` and update `src/data/*.js`.
- The three full-screen "story" panels use stand-in photos from the live site. Swap the `src` values in `STORY` (`content.js`).
- Menu dropdown items match the original site but link to `tis.edu.in`, because those inner pages are not rebuilt here.
- The enquiry form and its OTP step are UI-only. Connect `sendOtp`, `verifyOtp` and `onSubmit` in `EnquireModal.jsx` to your SMS provider and admissions API before real use.
