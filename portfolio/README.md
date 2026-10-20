# Marq Kenjie Buenconsejo — Developer Portfolio

A single-page portfolio built with **React 19**, **Vite 6**, **Tailwind CSS v4**, and **Lucide React** icons.

## Run it

Requires Node.js 18+ (20+ recommended).

```bash
npm install
npm run dev      # start the local dev server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Customize (most things live in one file)

| What | Where |
|---|---|
| Name, title, intro, email, GitHub, LinkedIn, resume, photo | `src/data/profile.js` |
| Education entry and year level | `education` in `src/data/profile.js` |
| Projects (add, edit, links, screenshots) | `src/data/projects.js` |
| Skill categories | `src/data/skills.js` |
| Colors, fonts, animations | `@theme` block in `src/index.css` |

Any link left as `''` shows a clearly labeled placeholder ("coming soon", "Not deployed") instead of a fake link.

- **Resume:** put `resume.pdf` in `public/`, then set `resume: '/resume.pdf'`.
- **Profile photo:** put `profile.jpg` in `public/`, then set `photo: '/profile.jpg'`. It replaces the code-window visual in the hero.
- **Project screenshots:** put images in `public/projects/` and set `image: '/projects/your-image.png'` on the project.
- **Project filter buttons** are generated automatically from each project's `category` and `tech` values.

## Contact form

The form validates input and then, depending on what you configure in `profile.js`:

1. **`contactFormEndpoint` set** (e.g. a free [Formspree](https://formspree.io) form URL): messages are sent there and the visitor sees a success or error message.
2. **Only `email` set:** the visitor's email app opens with the message pre-filled.
3. **Neither set:** the form says plainly that it isn't connected yet. It never pretends a message was sent.

## Features

- Sticky, blurred navbar with active-section highlighting and a mobile menu (Escape closes it)
- Dark mode by default, light mode toggle (remembered in the browser)
- Project filtering and an accessible project details dialog
- Scroll-reveal animations that switch off for users who prefer reduced motion
- Skip link, focus rings, semantic landmarks, SEO metadata

## Tailwind v4 note

Tailwind is set up through the `@tailwindcss/vite` plugin and `@import 'tailwindcss'` in `src/index.css`. There is intentionally **no** `tailwind.config.js` or `postcss.config.js`; don't add v3-style config files.

## Structure

```
public/            favicon (add resume.pdf, profile.jpg, project screenshots here)
src/
  components/      Navbar, Hero, About, Skills, Projects, ProjectCard, ProjectModal,
                   Education, Services, Contact, Footer, + small shared helpers
  data/            profile.js, projects.js, skills.js
  hooks/           useTheme, useActiveSection
  App.jsx  main.jsx  index.css
```
