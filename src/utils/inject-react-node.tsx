import type { ReactNode } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

type ReactElementContainer = Element | DocumentFragment;

export default function injectReactNode (
    container: ReactElementContainer,
    reactNode: ReactNode
) {
    createRoot(container).render(
        <StrictMode>
            {reactNode}
        </StrictMode>
    );
}
