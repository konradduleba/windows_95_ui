import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { MainAppProviders } from "@providers/main-app-providers/main-app-providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainAppProviders />
  </StrictMode>
);
