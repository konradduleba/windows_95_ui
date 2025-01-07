import { CSSProperties, FC, PropsWithChildren } from "react";
import cn from "classnames";

import { useExplorerWindow } from "@shared/explorer-window/providers";
import { useTaskManager } from "@providers/task-manager-provider/hooks";

import styles from "./main-window.module.scss";

export const MainWindow: FC<PropsWithChildren> = ({ children }) => {
  const { onMarkAsActiveTask } = useTaskManager();

  const {
    wrapperClassName,
    explorerRef,
    position,
    isWindowDragging,
    oldPosition,
    width,
    testId,
    taskId,
    footerOnRightSide,
  } = useExplorerWindow();

  const newPosition: CSSProperties = {
    top: isWindowDragging ? oldPosition.y : position.y,
    left: isWindowDragging ? oldPosition.x : position.x,
    width: `${width}px`,
  };

  return (
    <div
      ref={explorerRef}
      className={cn(
        styles.mainWindow,
        { [styles.rightSideFooter]: footerOnRightSide },
        wrapperClassName
      )}
      style={newPosition}
      data-testid={testId}
      onClick={() => onMarkAsActiveTask(taskId)}
    >
      {children}
    </div>
  );
};
