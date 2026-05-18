# CalciCloud Website

Static marketing site for CalciCloud, a cloud and DevOps consulting and training practice.

## Tech Stack

- Astro 6 static site generation
- TypeScript with Astro strict configuration
- Tailwind CSS 4 through the Vite plugin
- Astro image optimization via `astro:assets`
- `@astrojs/sitemap` for generated sitemap files
- Formspree-ready contact form through `PUBLIC_FORMSPREE_ID`

## Project Structure

```text
src/
  assets/        Optimized source images and SVG logos imported by Astro
  components/    Shared Astro components for layout, sections, forms, and training UI
  config/        Site-wide constants such as name, tagline, and contact settings
  data/          Structured content for training tracks and skill checks
  layouts/       Base HTML document, metadata, Open Graph, and JSON-LD
  lib/           Route helper for base-path-safe links
  pages/         Astro file-based routes
public/          Static files served as-is, including robots, favicon, and OG image
```

## Routes

- `/` - homepage
- `/consulting/` - consulting services
- `/training/` - training tracks and private cohorts
- `/about/` - practice principles
- `/contact/` - inquiry form
- `/404.html` - static not-found page

## Environment

Create a local `.env` file when needed:

```sh
PUBLIC_SITE_URL=https://calcicloud.com
PUBLIC_BASE_PATH=/
PUBLIC_FORMSPREE_ID=your_formspree_id
```

`PUBLIC_BASE_PATH` is useful for GitHub Pages project deployments. Leave it empty or `/` for a root-domain deployment.

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

The production build outputs to `dist/`.

## Deployment Notes

- Keep `PUBLIC_SITE_URL` aligned with the real production domain so canonical URLs, Open Graph images, and sitemap output are correct.
- The contact form is disabled until `PUBLIC_FORMSPREE_ID` is provided.
- `robots.txt` assumes the default GitHub Pages URL is `https://corpnce.github.io/calcicloud/`. Update it if you move to a custom domain.
