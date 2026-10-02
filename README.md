# Prodesk IT — Sprint 01 Landing Page

Professional responsive landing page for the Prodesk IT digital marketing wing.

## Sprint coverage

### Phase 1 — Base MVP
- Responsive navbar with desktop navigation and mobile hamburger menu
- Hero section with conversion-focused headline and CTA
- Three service cards using CSS Grid
- Footer with social icons
- Raw HTML, CSS and vanilla JavaScript; no Bootstrap/Material UI

### Phase 2 — UI/UX Enhancements
- Dark/light theme controller using a `dark` class on `<body>`
- CTA hover interactions
- Service-card z-axis lift on hover
- Sticky navigation
- Frosted-glass navigation using `backdrop-filter`

### Phase 3 — Stretch Goal
A Tailwind migration starter is included under `tailwind/`. Build it with:
```bash
npm install
npm run build
```
The generated `dist/` folder can be deployed to Vercel or Netlify.

## Project structure

```text
prodesk-it-sprint-01/
├── index.html
├── styles.css
├── script.js
├── README.md
├── Prompts.md
├── phase-1-2/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── tailwind/
│   ├── package.json
│   ├── tailwind.config.js
│   ├── src/
│   │   ├── input.css
│   │   └── index.html
│   └── .gitignore
└── assets/
    └── screenshot.png   # add the actual deployed-site screenshot before submission
```

## Local run

No server is required for the raw-CSS version. Open `index.html` directly, or use VS Code Live Server.

For the Tailwind version:
```bash
cd tailwind
npm install
npm run build
```

## Deployment

Recommended:
1. Create a public GitHub repository.
2. Push this project.
3. Import the repository into Vercel or Netlify.
4. Deploy the root static version, or configure the Tailwind build if submitting Phase 3.
5. Copy the live URL into this README.
6. Add a screenshot of the deployed page at `assets/screenshot.png`.

**Live URL:** `PASTE_YOUR_VERCEL_OR_NETLIFY_URL_HERE`

## QA checklist

- [ ] Desktop navbar renders correctly
- [ ] Mobile hamburger opens/closes correctly
- [ ] Theme toggle persists after refresh
- [ ] Hero CTA scrolls to Contact
- [ ] Three service cards remain aligned on desktop
- [ ] Service cards stack on mobile
- [ ] Sticky glass navbar works while scrolling
- [ ] No horizontal overflow at mobile widths
- [ ] Keyboard navigation is usable
- [ ] Lighthouse Performance = 100
- [ ] Lighthouse Accessibility = 100
- [ ] Final deployed URL works in an incognito window
- [ ] `Prompts.md` contains all AI prompts used during development
- [ ] Two-minute demo video recorded
