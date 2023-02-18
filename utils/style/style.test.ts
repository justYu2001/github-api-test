import { expect, it, vi } from "vitest";

import { style } from "./style";

it("get style", () => {
    vi.stubGlobal("document", {
        createElement() {
            return {
                textContent: "",
            };
        },
    });

    const cssText = "css";
    const getStyle = style(cssText);
    expect(getStyle().textContent).toBe("css");
});