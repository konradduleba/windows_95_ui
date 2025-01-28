import { createContext } from "react";

import type { UserSessionContextProps } from "./types";

export const UserSessionContext = createContext<UserSessionContextProps | null>(
  null
);
