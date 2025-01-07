import { FC, PropsWithChildren, ReactNode } from "react";

import { ExplorerWindow } from "@shared/explorer-window/explorer-window";
import { FooterButton } from "@shared/explorer-window/providers/explorer-window-provider/types";

import { usePrepareTaskWindowData } from "./hooks";

import styles from "./task-window.module.scss";

type TaskWindowProps = {
  title: ReactNode;
  customButtons?: FooterButton[];
};

export const TaskWindow: FC<PropsWithChildren<TaskWindowProps>> = ({
  children,
  title,
  customButtons,
}) => {
  const properties = usePrepareTaskWindowData();

  return (
    <ExplorerWindow
      {...properties}
      title={title}
      buttons={customButtons || properties.buttons}
    >
      <div className={styles.responseSuccess}>{children}</div>
    </ExplorerWindow>
  );
};
