import { createContext } from "react";

import { TaskManagerContextProps } from "./types";

export const TaskManagerContext = createContext<TaskManagerContextProps | null>(
  null
);
