import { useTranslation } from "react-i18next";
import { IoEarth } from "react-icons/io5";

import LoginForm from "@/components/portal/PortalLoginForm";
import NTUTLogo from "url:/assets/images/ntut-logo.png";
import RedHouseImage from "url:/assets/images/red-house.jpeg";

const PortalLoginPage = () => {
    const { t, i18n } = useTranslation();

    const getOppositeLanguage = () => {
        if (i18n.language === "zh") {
            return "English";
        } else {
            return "中文";
        }
    };

    const changeLanguage = () => {
        if (i18n.language === "zh") {
            i18n.changeLanguage("en");
        } else {
            i18n.changeLanguage("zh");
        }
    };

    return (
        <div className="grid h-screen min-w-[960px] grid-cols-2">
            <div>
                <img src={RedHouseImage} className="h-full w-full object-cover object-[50%]" />
            </div>
            <div className="relative flex flex-col items-center justify-center">
                <div className="absolute top-6 right-6">
                    <button className="flex items-center text-slate-400 font-medium hover:text-blue-600 text-lg" onClick={changeLanguage}>
                        {getOppositeLanguage()}
                        <IoEarth className="ml-1.5 text-2xl" />
                    </button>
                </div>
                <div className="my-8 w-80">
                    <img src={NTUTLogo} />
                    <h1 className="mt-4 text-center text-2xl font-medium tracking-wider text-blue-600">
                        {t("Taipei Tech Portal")}
                    </h1>
                </div>
                <LoginForm />
                <p className="absolute bottom-8">
                    {t("Have trouble logging in? Check out ")}
                    <a
                        href={t("login guide link")}
                        target="_blank"
                        rel="noreferrer noopenner"
                        className="font-medium text-blue-600"
                    >
                        {t("the login guide ")}
                    </a>
                    {t("or ")}
                    <a
                        href={t("phone number verification link")}
                        target="_blank"
                        rel="noreferrer noopenner"
                        className="font-medium text-blue-600"
                    >
                        {t("the phone number verification instructions")}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default PortalLoginPage;