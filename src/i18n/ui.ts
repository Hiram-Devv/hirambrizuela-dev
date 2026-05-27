import es from "./locales/es.json";
import en from "./locales/en.json";

export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es" as const;

export type Lang = keyof typeof languages;

const dictionaries = { es, en };

/**
 * Obtiene la función de traducción para un idioma específico.
 *
 * @example
 * const t = useTranslations('es');
 * t('nav.about'); // "Sobre mí"
 */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split(".");
    let value: unknown = dictionaries[lang];

    for (const k of keys) {
      if (typeof value === "object" && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback al idioma por defecto si la clave no existe
        console.warn(`[i18n] Missing key "${key}" in locale "${lang}"`);
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };
}
