# Raj Kumar — Portfolio

A premium, single-page portfolio built with **React + Vite + Tailwind CSS**, styled after Linear / Vercel / Stripe / Apple, using Royal Blue (`#2563EB`) as the brand color. Structured so a **Node.js + Express + MongoDB** backend can be dropped in later without touching the design.

## Quick start (frontend)

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

Build for production:

```bash
npm run build
npm run preview
```

## Add your content

| What | Where |
|---|---|
| Name, bio, links, resume path | `src/data/profile.js` |
| Skills + progress bars | `src/data/skills.js` |
| Work experience timeline | `src/data/experience.js` |
| Education | `src/data/education.js` |
| Projects (filters, modal content) | `src/data/projects.js` |
| Certifications | `src/data/certifications.js` |
| Achievements | `src/data/achievements.js` |

## Images & resume

Drop these files into `public/` (referenced by path, no import needed):

- `public/avatar.jpg` — hero circular profile photo
- `public/projects/*.jpg` — one image per project, matching `image` in `src/data/projects.js`
- `public/resume/Raj-Kumar-Resume.pdf` — used by the "Download Resume" button
- `public/og-image.png` — social share preview image (1200×630 recommended)

Until real images are added, the UI gracefully falls back to a branded placeholder (see `onError` handlers in `Hero.jsx` / `Projects.jsx` / `ProjectModal.jsx`), so nothing breaks.

## Connecting the MERN backend

A minimal Express + MongoDB API scaffold is already included in `/server` (kept separate from the Vite app on purpose):

```bash
cd server
npm install
cp .env.example .env   # set your MongoDB URI
npm run dev
```

It exposes:
- `POST /api/contact` — saves contact form submissions to MongoDB (`ContactMessage` model)
- `GET /api/projects` — stub route to serve projects dynamically later
- `GET /api/health` — health check

The frontend is already wired to call it:
- `src/config/api.js` centralizes the base URL (`VITE_API_URL` env var, defaults to `/api`)
- `src/components/Contact.jsx` POSTs to `${API_BASE_URL}/contact` and falls back to a `mailto:` link if the API isn't running — so the form works today and upgrades automatically once the backend is live.

To go fully dynamic later, replace the static imports in `src/data/*.js` with `apiFetch('/projects')` calls (see the comment at the top of `src/config/api.js`).

## Tech & structure

- **Animation:** Framer Motion — page-load sequence, scroll reveals, hover states, ripple buttons, animated skill bars, scroll-spy nav pill.
- **Ambient effects:** canvas particle field (`ParticlesBackground.jsx`), cursor glow (`MouseGlow.jsx`), scroll progress bar, back-to-top button.
- **Theming:** dark by default, with a working light/dark toggle (`context/ThemeContext.jsx`), persisted to `localStorage`.
- **Accessibility:** visible focus rings, semantic headings, `aria-label`s on icon buttons, reduced-motion support, modal focus trap via `Escape` + backdrop click.
- **Performance:** lazy-loaded project images, code-split by default via Vite, no unused heavy deps.

```
src/
  components/       Section + UI components
    ui/              Reusable primitives (Reveal, RippleButton, SectionHeading)
  context/           Theme context
  data/              Static content (swap for API calls later)
  config/            API base URL + fetch helper
  hooks/             useScrollSpy, useScrollProgress
server/              Express + MongoDB API scaffold (separate from the Vite app)
```
