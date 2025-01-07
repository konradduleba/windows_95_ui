import { FC, PropsWithChildren } from "react";

import { ExplorerWindow } from "@shared/explorer-window/explorer-window";

import { usePrepareTaskWindowData } from "./hooks";

import styles from "./task-window.module.scss";

export const TaskWindow: FC<PropsWithChildren> = ({ children }) => {
  const properties = usePrepareTaskWindowData();

  return (
    <ExplorerWindow {...properties}>
      <div className={styles.dateTimeProperties}>{children}</div>
    </ExplorerWindow>
  );
};
