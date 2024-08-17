import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./en/en.json";
import RU from "./ru/ru.json";

const resources = {
  en: {
    translation: EN,
  },
  ru: {
    translation: RU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "en",
});

export default i18n;
