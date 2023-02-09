import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import Image from "./Image";
import NTUTLogoImage from "@/assets/images/ntut-logo.png";

describe("Image Component", () => {
    it("validate src", () => {
        vi.stubGlobal("chrome", {
            runtime: {
                getURL(filePath: string) {
                    return `chrome-extension://foaihjpbohhnfekgbfjmeeemjapmpcgh${filePath}`;
                },
            },
        });

        render(<Image src={NTUTLogoImage} />);
        const imageSrc = screen.getByRole("img").getAttribute("src");

        expect(imageSrc).toBe("chrome-extension://foaihjpbohhnfekgbfjmeeemjapmpcgh/src/assets/images/ntut-logo.png");
    });
});
