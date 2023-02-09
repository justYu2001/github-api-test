import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend, { HttpBackendOptions } from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init<HttpBackendOptions>({
    fallbackLng: "en",
    returnNull: false,
    backend: {
        loadPath: chrome.runtime.getURL("/locales/{{lng}}/{{ns}}.json"),
    },
});

export default i18n;