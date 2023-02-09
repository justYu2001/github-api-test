import { render } from "@testing-library/react";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import type { ReactNode } from "react";
import { initReactI18next, I18nextProvider } from "react-i18next";

const SupportedLanguages = ["zh-TW", "en"] as const;
type SupportedLanguage = typeof SupportedLanguages[number];

i18n.use(Backend).use(initReactI18next).init({
    fallbackLng: "en",
    backend: {
        loadPath: "http:localhost:5173/locales/{{lng}}/{{ns}}.json",
    },
    react: {
        useSuspense: false,
    }
});

export const renderWithI18next = async (component: ReactNode, language: SupportedLanguage) => {
    await i18n.changeLanguage(language);
    return render(
        <I18nextProvider i18n={i18n}>
            {component}
        </I18nextProvider>
    );
};