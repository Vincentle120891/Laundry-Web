import { useEffect, useState } from 'react';

type Locale = 'en' | 'vi' | 'ko';

const translations: Record<Locale, any> = {
  en: {},
  vi: {},
  ko: {},
};

let currentLocale: Locale = 'en';
let listeners: Set<() => void> = new Set();

export async function loadTranslations(locale: Locale) {
  try {
    const response = await fetch(`/locales/${locale}/common.json`);
    const data = await response.json();
    translations[locale] = data;
    return data;
  } catch (error) {
    console.error(`Failed to load translations for ${locale}`, error);
    return translations.en;
  }
}

export function useTranslation(locale: Locale = currentLocale) {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const listener = () => forceUpdate({});
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const t = (key: string, params?: Record<string, any>) => {
    const keys = key.split('.');
    let value: any = translations[locale];
    
    for (const k of keys) {
      value = value?.[k];
    }

    if (value === undefined) {
      // Fallback to English
      let fallbackValue: any = translations.en;
      for (const k of keys) {
        fallbackValue = fallbackValue?.[k];
      }
      value = fallbackValue || key;
    }

    // Handle pluralization and interpolation
    if (typeof value === 'string' && params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        value = value.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(paramValue));
      });

      // Handle pluralization
      if (params.count !== undefined) {
        const count = params.count;
        const pluralKey = count === 1 ? 'one' : 'other';
        const pluralValue = translations[locale][keys[0]]?.[`${keys[1]}_${pluralKey}`];
        if (pluralValue) {
          value = pluralValue;
          Object.entries(params).forEach(([paramKey, paramValue]) => {
            value = value.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(paramValue));
          });
        }
      }
    }

    return value;
  };

  return { t, locale };
}

export function setLocale(locale: Locale) {
  currentLocale = locale;
  localStorage.setItem('laundry-locale', locale);
  listeners.forEach((listener) => listener());
}

export function getLocale(): Locale {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('laundry-locale') as Locale;
    if (stored && ['en', 'vi', 'ko'].includes(stored)) {
      return stored;
    }
    
    // Auto-detect from browser
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('vi')) return 'vi';
    if (browserLang.startsWith('ko')) return 'ko';
  }
  return 'en';
}

export async function initI18n() {
  const locale = getLocale();
  await Promise.all([
    loadTranslations('en'),
    loadTranslations('vi'),
    loadTranslations('ko'),
  ]);
  setLocale(locale);
  return locale;
}
