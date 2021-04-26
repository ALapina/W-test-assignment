import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import EnglishTranslation from "./en/english-translation.json";
import SpanishTranslation from "./es/spanish-translation.json";

export const resources = {
  en: { translation: EnglishTranslation },
  es: { translation: SpanishTranslation },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
