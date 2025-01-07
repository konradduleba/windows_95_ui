import { createContext } from "react";

import { BootstrapContextProps } from "./types";

export const BootstrapContext = createContext<BootstrapContextProps | null>(
  null
);
