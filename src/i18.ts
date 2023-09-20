import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/assets/locales/en.json";
import ru from "@/assets/locales/ru.json";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  interpolation: {
    escapeValue: true,
  },
});

export default i18next;
