import { useTranslation } from "react-i18next";

import "@/index.css";
import NTUTLogo from "@/assets/images/ntut-logo.png";
import RedHouseImage from "@/assets/images/red-house.jpeg";
import Image from "@/components/common/Image";
import LoginForm from "@/components/portal/PortalLoginForm";

const PortalLoginPage = () => {
    const { t } = useTranslation();

    return (
        <div className="grid h-screen min-w-[960px] grid-cols-2">
            <div>
                <Image
                    src={RedHouseImage}
                    className="h-full w-full object-cover object-[50%]"
                />
            </div>
            <div className="relative flex flex-col items-center justify-center">
                <div className="my-8 w-80">
                    <Image src={NTUTLogo} />
                    <h1 className="mt-4 text-center text-2xl font-medium tracking-wider text-blue-600">
                        {t("Taipei Tech Portal")}
                    </h1>
                </div>
                <LoginForm />
                <p className="absolute bottom-8 text-center">
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
