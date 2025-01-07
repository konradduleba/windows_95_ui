import { FC, PropsWithChildren } from "react";

import { ExplorerWindowContext } from "./explorer-window.context";

import { ExplorerWindowProps, ExplorerWindowProviderProps } from "./types";

import { useCloseExplorerWindow, useDraggExplorerWindow } from "./hooks";

export const ExplorerWindowProvider: FC<
  PropsWithChildren<ExplorerWindowProps>
> = ({ children, isDraggable = true, position, taskId, ...props }) => {
  const dragProperties = useDraggExplorerWindow({ position, taskId });
  const closeProperties = useCloseExplorerWindow({
    taskId,
  });

  const properties: ExplorerWindowProviderProps = {
    taskId,
    ...props,
    ...closeProperties,
    ...dragProperties,
    isDraggable,
  };

  return (
    <ExplorerWindowContext.Provider value={properties}>
      {children}
    </ExplorerWindowContext.Provider>
  );
};
