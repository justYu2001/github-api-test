import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
    matches: [
        "https://nportal.ntut.edu.tw/*",
        "https://nportal.ntut.edu.tw/index.do*",
    ],
    exclude_matches: [
        "https://nportal.ntut.edu.tw/myPortal.do*",
    ],
    run_at: "document_start",
};

window.location.href = "https://app.ntut.edu.tw/index.do";