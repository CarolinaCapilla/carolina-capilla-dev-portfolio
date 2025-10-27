# Carolina Capilla – Portfolio

Personal portfolio built with Nuxt 4, Vue 3, and Tailwind CSS. Features a beautiful dark/light theme, featured project carousel, project filtering, and a clean modern design.

## ✨ Features

- 🎨 Dark/Light theme toggle with system preference detection
- 🖼️ Featured project showcase with image carousel
- 🔍 Project filtering by technology tags
- 📱 Fully responsive design
- ⚡ Fast and optimized with Nuxt 4
- 🎯 Type-safe with TypeScript
- 🧹 ESLint + Prettier configured
- 🚀 CI/CD ready with GitHub Actions

## 🛠️ Tech Stack

- **Framework**: Nuxt 4 + Vue 3
- **Styling**: Tailwind CSS 4 (via `@tailwindcss/vite`)
- **Icons**: `@nuxt/icon`
- **Theme**: `@nuxtjs/color-mode`
- **UI Components**: `@headlessui/vue`
- **Type Safety**: TypeScript
- **Code Quality**: ESLint + Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js 22+
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd carolina-capilla-dev-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - Home page: Hero section + Featured project
   - Work page: `/work` - All projects with filtering
   - About page: `/about` - Profile, experience, education, skills

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run preview      # Preview production build
npm run generate     # Generate static site (SSG)
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Check Prettier formatting
npm run format:fix   # Fix Prettier formatting
```

## 📁 Project Structure

```
app/
├── components/
│   ├── ContactModal.vue      # Contact form modal
│   ├── FeaturedProject.vue   # Featured project with carousel
│   ├── Footer.vue            # Site footer
│   ├── HomeHero.vue          # Landing page hero section
│   ├── Navbar.vue            # Navigation bar with theme toggle
│   ├── ProjectFilters.vue    # Project tag filters
│   ├── WorkCard.vue          # Individual project card
│   └── WorkGrid.vue          # Project grid layout
├── data/
│   ├── about.ts              # Profile, social links, experience, education, skills
│   ├── theme.ts              # Theme utilities and class helpers
│   └── work.ts               # Projects data
├── pages/
│   ├── index.vue             # Home page (Hero + Featured project)
│   ├── about.vue             # About page
│   └── work.vue              # Work page (All projects with filters)
├── types/
│   └── project.ts            # TypeScript type definitions
└── assets/
    └── css/
        └── main.css          # Global styles

public/                        # Static assets (images, etc.)
```

## ✏️ Customizing Content

### 1. Personal Information & About Page

Edit `app/data/about.ts`:

- **`person`**: Name, role, avatar, email, location, languages
- **`social`**: Social media links (GitHub, LinkedIn, etc.)
- **`aboutContent`**:
  - `intro`: Introduction paragraphs
  - `work.experiences`: Work experience entries
  - `studies.institutions`: Education history
  - `technical.skills`: Technical skills with icons

### 2. Projects

Edit `app/data/work.ts`:

```typescript
{
  id: 1,
  title: "Project Name",
  description: "Project description",
  image: "/project-image.png",
  tags: [
    { name: "Nuxt", icon: "simple-icons:nuxtdotjs" },
    { name: "TypeScript", icon: "simple-icons:typescript" }
  ],
  link: "https://live-demo.com",  // Optional
  source: "https://github.com/...", // Optional
  isPortfolio: false // Set to true for portfolio project
}
```

**For the Featured Project Carousel:**
- The Valorant project automatically shows 5 images (main + 4 additional)
- Add images to `public/` folder
- Update the carousel logic in `FeaturedProject.vue` if needed

### 3. Images

Place images in the `public/` directory:
- `/avatar.jpeg` - Your profile photo
- `/portfolio.png` - Portfolio preview (used for SEO/social sharing)
- `/valorant_*.png` - Project screenshots

### 4. Theme Customization

The theme uses Tailwind CSS with custom color mode support:
- Default preference: Dark mode
- Modify in `nuxt.config.ts` under `colorMode`
- Customize colors in `app/data/theme.ts`

## 🎨 Theme Toggle

The site supports both light and dark themes:
- Default: Dark mode
- Automatic: Respects system preferences
- Manual: Toggle via the moon/sun icon in the navbar
- Persists: User preference saved in localStorage

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Framework preset: **Nuxt.js**
4. Build command: `npm run build`
5. Deploy!

### Netlify

1. Connect your repository
2. Build command: `npm run generate`
3. Publish directory: `.output/public`
4. Deploy!

### Static Hosting

Generate a static site:
```bash
npm run generate
```
Upload the `.output/public` folder to any static host.

## 🔧 Development

### Type Definitions

All project types are defined in `app/types/project.ts`:
- `Project`: Main project interface
- `ProjectTag`: Technology tag interface

### Adding New Icons

Icons are provided by `@nuxt/icon`:
- Browse icons at [Iconify](https://icon-sets.iconify.design/)
- Use format: `collection:icon-name`
- Example: `simple-icons:github`, `ph:house`

### Code Quality

The project includes:
- **ESLint**: Configured with Nuxt ESLint preset
- **Prettier**: Code formatting with consistent style
- **TypeScript**: Full type safety across components

Run checks:
```bash
npm run lint        # Check for errors
npm run format      # Check formatting
```

Auto-fix:
```bash
npm run lint:fix    # Fix linting issues
npm run format:fix  # Fix formatting issues
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Carolina Capilla**
- Full Stack Developer
- Specializing in Laravel & Nuxt.js

---

Built with ❤️ using Nuxt 4, Vue 3, and Tailwind CSS
