# Carolina Capilla – Portfolio (Nuxt 4)

Personal portfolio built with Nuxt 4, Vue 3, and Tailwind CSS. It showcases About and Work pages with a clean, dark‑mode‑first design, a centered pill‑style navbar, and simple data files you can edit.

## Tech stack

- Nuxt 4 + Vue 3
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- `@nuxt/icon` for icons
- `@nuxtjs/color-mode` for theme toggling (dark by default)

## Getting started

1) Install dependencies

```
npm install
```

2) Run the dev server

```
npm run dev
```

- Visit `/about` (the root `/` redirects to `/about` via `middleware/redirect-home.global.ts`).
- Work grid is at `/work`.

## Scripts

```
npm run dev       # start development server
npm run build     # production build
npm run preview   # preview production build
npm run generate  # prerender (SSG) if you prefer static hosting
```

## Project structure (not exhaustive)

- `app/app.vue`: App shell with `Navbar` and `Footer`.
- `app/pages/about.vue`: About page rendering profile, experience, studies, and skills.
- `app/pages/work.vue`: Work page rendering a grid of projects.
- `app/components/WorkGrid.vue`, `app/components/WorkCard.vue`: Work listing UI.
- `app/components/Navbar.vue`: Centered pill navbar with live clock and theme toggle.
- `app/components/Footer.vue`: Simple footer.
- `app/data/about.ts`: Profile, social links, and About page content.
- `app/data/work.ts`: Array of projects shown on the Work page.
- `app/data/theme.ts`: Small helpers for consistent light/dark classes.
- `middleware/redirect-home.global.ts`: Redirects `/` → `/about`.
- `public/`: Static assets (e.g., images like `/avatar.jpeg`, `/portfolio.png`).

## Editing content

### About page
Edit `app/data/about.ts`:

- `person`: name, role, avatar path, email, location, languages
- `social`: array of links (GitHub, LinkedIn, Email, ...)
- `aboutContent`:
  - `intro`: paragraphs under the header
  - `work.experiences`: company, timeframe, role, achievements
  - `studies.institutions`: name and description
  - `technical.skills`: title, description, tags (with optional icon names)

### Work page
Projects are currently defined in `app/data/work.ts` using the `Project` type:

- `title`, `description`, `image` (use files in `public/`)
- optional `tags` with `name` and optional `icon`
- optional `link` (live demo) and `source` (GitHub)
- optional `isPortfolio` to display a special overlay for this site

There is also a sample Nuxt Content entry under `content/work/first-project.md` with frontmatter (`title`, `publishedAt`, `summary`, `images`). Nuxt Content is installed, but the Work page currently reads from `app/data/work.ts`. You can wire markdown content later if you prefer fully CMS‑like entries.

## Theming

- Uses `@nuxtjs/color-mode` with dark mode as the default.
- Toggle theme via the button in `Navbar.vue`.
- Tailwind is configured via Vite plugin in `nuxt.config.ts` and base styles in `app/assets/css/main.css`.

## Deployment

### Vercel
1) Push the repo to GitHub.
2) In Vercel, import the project and select the repo.
3) Framework preset: Nuxt.
4) Build command: `npm run build` (default). Vercel detects Nuxt 4 and serves `.output` automatically.
5) Deploy.

### Static hosting (optional)
```
npm run generate
```
The prerendered site will be created in `.output/public`.
