# Project thumbnails

Drop the images for the Projects section here, then import them in
`src/data/projects.ts` and list them in `images`. Every one of them renders as a
thumbnail on the card, in that order, and opens the gallery at its own index.

```ts
import cover from '../assets/projects/thena-feedback.webp';
import second from '../assets/projects/thena-dashboard.webp';

export const projects: Project[] = [
  { id: 'thena', /* ... */, images: [cover, second] },
];
```

## Conventions

- **Format**: `.webp`
- **Size**: 1280×720 (16:9). The gallery shows them at up to 1024px wide, so
  640px would look soft there. 1920px is past the point where the extra pixels
  buy anything.
- **Weight**: keep each file under ~120 KB.
- **Name**: `<project-id>-<screen>.webp` (`thena-feedback.webp`).

## Why here and not in `public/`

`vite.config.ts` sets `base: '/portfolio/'` for GitHub Pages. A hardcoded path
like `/images/thena.webp` works in dev and 404s in production, because the real
URL is `/portfolio/images/thena.webp`. An imported asset gets the base applied
automatically, gets a content hash for cache busting, and breaks the build
instead of the deploy when the file is missing.

`public/` is for files that need a literal, stable URL: `robots.txt`,
`favicon.ico`, a CV PDF.
