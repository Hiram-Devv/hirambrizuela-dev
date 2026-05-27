import { defaultLang, type Lang } from "./ui";

/**
 * Detecta el idioma a partir de la URL.
 *
 * @example
 * getLangFromUrl(new URL('https://site.com/en/about')) // 'en'
 * getLangFromUrl(new URL('https://site.com/about'))    // 'es'
 */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  if (segment === "en") return "en";
  return defaultLang;
}

/**
 * Construye una ruta localizada.
 *
 * @example
 * localizePath('/proyectos', 'en') // '/en/proyectos'
 * localizePath('/proyectos', 'es') // '/proyectos'
 */
export function localizePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
