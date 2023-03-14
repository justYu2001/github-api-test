import "@/index.css";
import Link from "./Link";
import NPCLogo from "url:/assets/images/NPC.png";
import Logo from "url:/assets/images/logo.png";

const Popup = () => {
    return (
        <div className="w-96 rounded-md p-3">
            <h1 className="flex items-center border-b-2 border-slate-300 py-2 text-2xl font-medium text-sky-500">
                <img src={Logo} className="mr-1.5 block h-8 w-8" />
                NTUT Enhancer
            </h1>
            <ul>
                <Link href="https://nportal.ntut.edu.tw/">北科入口網站</Link>
                <Link href="https://github.com/justYu2001/NTUT-Enhancer">專案連結</Link>
            </ul>
            <div className="mt-0.5 flex items-center px-0.5">
                <p className="mr-0.5 tracking-wide text-gray-400">北科程式設計研究社</p>
                <img className="w-5" src={NPCLogo} />
            </div>
        </div>
    );
};

export default Popup;
