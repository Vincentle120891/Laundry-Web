import { useState, useEffect } from 'react';
import { getLocale, setLocale, loadTranslations } from '../i18n';
import type { Language } from '../types';

export function useLanguage() {
  const [locale, setLocaleState] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function init() {
      const savedLocale = getLocale();
      await loadTranslations(savedLocale);
      setLocaleState(savedLocale);
      setIsLoading(false);
    }
    init();
  }, []);

  const changeLanguage = async (newLocale: Language) => {
    setIsLoading(true);
    await loadTranslations(newLocale);
    setLocale(newLocale);
    setLocaleState(newLocale);
    setIsLoading(false);
  };

  return { locale, changeLanguage, isLoading };
}
