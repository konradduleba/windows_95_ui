import { useContext } from "react";

import { TaskManagerContext } from "../task-manager.context";

export const useTaskManager = () => {
  const context = useContext(TaskManagerContext);

  if (!context) {
    throw new Error("useTaskManager must be used within a TaskManagerContext");
  }

  return context;
};
