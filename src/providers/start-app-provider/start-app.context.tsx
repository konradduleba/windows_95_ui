import { createContext } from "react";

import { StartAppContextProps } from "./types";

export const StartAppContext = createContext<StartAppContextProps | null>(null);
