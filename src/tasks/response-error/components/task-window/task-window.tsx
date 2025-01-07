import { FC, PropsWithChildren, ReactNode } from "react";

import { GenericResponseError } from "@api/types";

import { ExplorerWindow } from "@shared/explorer-window/explorer-window";

import { usePrepareTaskWindowData } from "./hooks";

import styles from "./task-window.module.scss";

type TaskWindowProps = Pick<GenericResponseError, "statusCode"> & {
  customTitle?: ReactNode;
};

export const TaskWindow: FC<PropsWithChildren<TaskWindowProps>> = ({
  children,
  statusCode,
  customTitle,
}) => {
  const properties = usePrepareTaskWindowData({ statusCode });

  return (
    <ExplorerWindow {...properties} title={customTitle || properties.title}>
      <div className={styles.responseError}>{children}</div>
    </ExplorerWindow>
  );
};
