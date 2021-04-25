import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EnglishTranslation from "./en/english-translation.json";
import SpanishTranslation from "./es/spanish-translation.json";

export const resources = {
  en: { translation: EnglishTranslation },
  es: { translation: SpanishTranslation },
};

i18n.use(initReactI18next).init({
  // debug: true,
  lng: "en",
  resources,
});

export default i18n;
