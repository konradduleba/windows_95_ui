import { FC, PropsWithChildren } from "react";

import { useHandleTaskManagerStack } from "./hooks";

import { TaskManagerContext } from "./task-manager.context";

export const TaskManagerProvider: FC<PropsWithChildren> = ({ children }) => {
  const properties = useHandleTaskManagerStack();

  return (
    <TaskManagerContext.Provider value={properties}>
      {children}
    </TaskManagerContext.Provider>
  );
};
