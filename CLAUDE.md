# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

Single-page Next.js 14 portfolio with App Router. All source files live in `src/app/`. The page is one long scrollable layout with anchor-linked sections.

**Component structure** (`src/app/`):
- `page.js` — Root client component. Owns dark mode state (`useState`) and passes `darkMode`/`toggleDarkMode` down to `Navbar`. Renders all sections in order: About, Skills, Projects, Contact.
- `navbar.js` — Fixed top navbar with desktop + hamburger mobile menu. Accepts `darkMode`/`toggleDarkMode` props.
- `altnavbar.js` — Alternative navbar design (not currently used; swap in `page.js` import to test).
- `logos.js` — Skills grid. Logo images are in `public/` and listed in a static array at the top of the file.
- `projects.js` — Project cards grid. Each card is a hardcoded `<a>` linking to GitHub.
- `contact.js` — Contact info section with static phone, email, LinkedIn, GitHub links.

**Dark mode**: Class-based Tailwind dark mode (`darkMode: 'class'` in `tailwind.config.js`). `page.js` toggles `document.body.classList` and wraps content in `bg-dark`/`bg-light` classes.

**Animations**: `animate.css` + `IntersectionObserver` in `logos.js`, `projects.js`, and `contact.js`. Elements start `opacity-0` and get `animate__fadeInUp` added when they scroll into view. Note: all three components duplicate the same observer setup targeting `.skill-item, .project-card, .contact-section`.

**Styling**: Mix of Tailwind utility classes and custom CSS in `globals.css` (under `@layer utilities`). Custom Tailwind tokens are in `tailwind.config.js` — notably `dark` (bg color), `light`, and `customDarkNavBg`.

**Resume**: Two PDF files in `public/` — `Resume_Improved.pdf` (linked in desktop navbar) and `resume.pdf` (linked in mobile navbar). Both download as `Devstutya_Pandey_Resume.pdf`.
