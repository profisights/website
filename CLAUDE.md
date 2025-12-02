# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (via @tailwindcss/postcss)

## Project Structure

This is a standard Next.js App Router project:

- `app/` - App Router pages and layouts
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Home page
  - `globals.css` - Global styles and Tailwind imports
- `public/` - Static assets
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript config with `@/*` path alias mapping to project root

## Conventions

- Path alias: Use `@/` to import from the project root (e.g., `@/app/page`)
- Tailwind v4 uses `@import "tailwindcss"` syntax in CSS and `@theme inline` for CSS variables
- Dark mode uses `prefers-color-scheme` media query with CSS variables
