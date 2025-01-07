import { createContext } from "react";

import { ExplorerWindowProviderProps } from "./types";

export const ExplorerWindowContext =
  createContext<ExplorerWindowProviderProps | null>(null);
