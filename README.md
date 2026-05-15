# Portfolio Website

A personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. It includes a responsive layout, mobile menu, dark mode toggle, and multiple content sections (portfolio, resume, stack, products, links, and gallery).

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- lucide-react icons

## Sections

- Portfolio (skills, projects, achievements)
- Resume (PDF preview and download)
- Laravel setup (installers and links)
- Digital products
- Featured links
- Gallery

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` - start the Vite dev server
- `npm run build` - type-check and build for production
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Customize content

Edit `src/App.tsx` and update the `DATA` object:

- Profile details: `name`, `title`, `location`, `phone`, `email`, `objective`
- Skills: `skills.technical` and `skills.soft`
- Projects: `projects`
- Education and achievements: `education`, `achievements`
- Links and products: `links`, `digitalProducts`
- Resume path: `resume`
- Gallery items: `gallery`

## Assets

- Resume PDF: place it in `public/RESUME_LATEST2026.pdf` or update `DATA.resume`
- Gallery images: place files under `public/gallery` and update `DATA.gallery`
- Local installer files: place them under `public/laravel installers` and update `DATA.laravelStack`

## Build and deploy

```bash
npm run build
```

Deploy the `dist` folder to any static hosting provider.
