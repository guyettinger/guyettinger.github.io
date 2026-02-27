# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Build for production (static export)
npm run start     # Run production server
npm run lint      # ESLint via next lint
npm run format    # Prettier write
npm run format:check  # Prettier check
```

There are no tests in this project.

## Architecture

This is a **Next.js 15 portfolio site** with static export (`output: 'export'` in `next.config.js`), deployed to GitHub Pages and Vercel. React 19 with App Router.

### Source layout

- **`src/app/`** — Next.js App Router pages. `layout.tsx` wraps everything in `AppProvider` + `AppLayout`. `page.tsx` is the single-page home with all sections stacked vertically. Sub-routes under `resume/` and `learning/` render expanded section detail pages.
- **`src/blocks/`** — Large feature sections (Hero, About, Skills, ResumeList, ProjectList, LearningList, Contact, Header, Footer, Background, AppLayout, PageLayout). Each block has its own directory with an `index.ts` barrel export.
- **`src/components/`** — Reusable UI components. The **Cards system** (CardGallery → CardGrid + CardModal, CardView, cardContext) handles the expandable card UX used by Projects, Resume, and Learning sections. `components/ui/` holds shadcn/ui primitives.
- **`src/data/`** — Static TypeScript data files: `resumeData.ts`, `projectData.ts`, `learningData.ts`. Adding new resume entries, projects, or learning content means editing these files and creating corresponding block components.
- **`src/providers/`** — `AppProvider` wraps TanStack Query + `AppStyleProvider` (next-themes dark/light mode).
- **`src/hooks/`** — `useWebGLAvailable` detects WebGL support.
- **`src/lib/utils.ts`** — `cn()` helper (clsx + tailwind-merge).

### Key dependencies and patterns

- **`@/`** path alias maps to `src/` (configured in `tsconfig.json`).
- **Styling**: Tailwind CSS with shadcn/ui (new-york style, neutral base color, CSS variables). Use the `cn()` helper for conditional class names.
- **3D Background**: `Background.tsx` uses React Three Fiber (`@react-three/fiber`) with a custom `PortalMaterial` shader from `gle-r3f-components`. It adapts colors to the current theme.
- **Cards pattern**: `CardGallery` renders a `CardGrid` of small `CardView` cards; clicking one opens a `CardModal` with an animated overlay (Framer Motion). Each item provides a `smallView` and `largeView` via `CardContext`.
- **Markdown rendering**: `MarkdownDocument` fetches and renders GitHub README files for project cards using `react-markdown` with `github-markdown-css`.
- **Theme**: `next-themes` with `attribute="class"`, defaulting to system preference.
- **Static export**: Images must use `unoptimized: true`. No server-side rendering — avoid any Node.js-only APIs.
- **Prettier**: Configured with `prettier-plugin-tailwindcss` (sorts Tailwind classes) and `prettier-plugin-organize-imports` (auto-sorts imports).

### Adding new content

- **New project**: Add an entry to `src/data/projectData.ts`.
- **New resume entry**: Add to `src/data/resumeData.ts`, create a block under `src/blocks/Resume/ResumeSections/<Company>/`, and add an app route at `src/app/resume/<company>/page.tsx`.
- **New learning section**: Add to `src/data/learningData.ts`, create a block under `src/blocks/Learning/LearningSections/`, and add an app route at `src/app/learning/<path>/page.tsx`.