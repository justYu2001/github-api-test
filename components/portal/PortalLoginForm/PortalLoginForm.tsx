import { FormEvent, useState } from "react";

import { useTranslation } from "react-i18next";

import Input from "@/components/portal/PortalLoginInput";

type FormInputEvent = FormEvent<HTMLInputElement>;

const PortalLoginForm = () => {
    const [studentID, setStudentID] = useState("");

    const handelStudentIDInputChange = (event: FormInputEvent) => {
        setStudentID(event.currentTarget.value);
    };

    const [password, setPassword] = useState("");

    const handelPasswordInputChange = (event: FormInputEvent) => {
        setPassword(event.currentTarget.value);
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { t } = useTranslation();

    return (
        <form
            action="login.do"
            method="post"
            className="flex w-96 flex-col"
            onSubmit={() => setIsLoggedIn(true)}
        >
            <Input
                id="student-id"
                name="muid"
                label={t("Student ID")}
                value={studentID}
                onChange={handelStudentIDInputChange}
            />
            <Input
                type="password"
                id="password"
                name="mpassword"
                label={t("Password")}
                value={password}
                autoComplete="current-password"
                onChange={handelPasswordInputChange}
            />
            <a
                href={t("password recovery link")}
                target="_blank"
                rel="noreferrer noopenner"
                className="-my-1 self-start pl-1 text-slate-400 transition-colors duration-300 hover:text-slate-500"
            >
                {t("Forgot password?")}
            </a>
            <button
                type="submit"
                disabled={
                    studentID.length === 0 || password.length === 0 || isLoggedIn
                }
                className="mt-10 rounded bg-blue-600 py-2 text-xl font-bold tracking-wide text-white disabled:bg-blue-600/40"
            >
                {t("Log In")}
            </button>
        </form>
    );
};

export default PortalLoginForm;
