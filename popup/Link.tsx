import type { ReactNode } from "react";

import { IoIosArrowForward } from "react-icons/io";

interface LinkProps {
    children: ReactNode;
    href: string;
}

const Link = ({ children, href }: LinkProps) => {
    const openLinkInNewTab = () => chrome.tabs.create({ url: href });

    return (
        <div
            className="group flex cursor-pointer items-center justify-between border-b border-slate-300 px-1 py-2.5 text-lg tracking-wide last:border-none"
            onClick={openLinkInNewTab}
        >
            {children}
            <IoIosArrowForward className="text-sky-500 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
    );
};

export default Link;
