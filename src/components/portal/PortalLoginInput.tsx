import { FormEvent } from "react";

import "@/index.css";

type FormInputEvent = FormEvent<HTMLInputElement>;

interface PortalLoginInputProps {
    autoComplete?: string;
    id: string;
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (event: FormInputEvent) => void;
    onInvalid?: (event: FormInputEvent) => void;
}

const PortalLoginInput = ({
    autoComplete = "off",
    id,
    label,
    name,
    type = "text",
    value,
    onChange,
    onInvalid = (event) => event.preventDefault(),
}: PortalLoginInputProps) => {
    return (
        <div className="relative my-4 rounded border-2 border-slate-300 transition-all duration-300 focus-within:border-blue-700">
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                placeholder=" "
                autoComplete={autoComplete}
                required
                className="peer w-full py-4 px-3 text-xl outline-none"
                onChange={onChange}
                onInvalid={onInvalid}
            />
            <label
                htmlFor={id}
                className="absolute left-1.5 top-0 bottom-0 my-auto block h-fit cursor-text bg-white px-1 text-xl text-slate-400 transition-all duration-500 peer-valid:-translate-y-[115%] peer-valid:text-lg peer-focus:-translate-y-[115%] peer-focus:text-lg peer-focus:text-blue-700"
            >
                {label}
            </label>
        </div>
    );
};

export default PortalLoginInput;
