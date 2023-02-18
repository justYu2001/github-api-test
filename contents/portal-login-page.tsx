import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo";

import "@/utils/i18n";
import { style } from "@/utils/style";
import cssText from "data-text:/index.css";

export const config: PlasmoCSConfig = {
    matches: ["https://app.ntut.edu.tw/index.do*"],
};

export const getStyle: PlasmoGetStyle = style(cssText);

export { default } from "@/components/portal/PortalLoginPage";
