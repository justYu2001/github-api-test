import PortalLoginPage from "@/components/portal/PortalLoginPage";
import "@/utils/i18n";
import injectReactNode from "@/utils/inject-react-node";

const portalLoginPageRoot = document.createElement("div");
portalLoginPageRoot.id = "portal-login-page-root";
document.body.append(portalLoginPageRoot);

injectReactNode(portalLoginPageRoot, <PortalLoginPage />);