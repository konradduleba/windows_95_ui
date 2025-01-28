import { FC, PropsWithChildren, ReactNode } from "react";

import { ExplorerWindow } from "@shared/explorer-window/explorer-window";

import { usePrepareTaskWindowData } from "./hooks";

import styles from "./task-window.module.scss";

type TaskWindowProps = {
  customTitle?: ReactNode;
  customTaskId?: string;
};

export const TaskWindow: FC<PropsWithChildren<TaskWindowProps>> = ({
  children,
  customTitle,
  customTaskId,
}) => {
  const properties = usePrepareTaskWindowData();

  const title = customTitle || properties.title;
  const taskId = customTaskId || properties.taskId;

  return (
    <ExplorerWindow {...properties} title={title} taskId={taskId}>
      <div className={styles.responseError}>{children}</div>
    </ExplorerWindow>
  );
};
