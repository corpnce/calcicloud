/** Prefix for GitHub Pages project sites (`astro.config.mjs` `base`). */
export function route(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`;
}
