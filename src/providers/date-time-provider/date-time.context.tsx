import { createContext } from "react";

import { DateTimeContextProps } from "./types";

export const DateTimeContext = createContext<DateTimeContextProps | null>(null);
