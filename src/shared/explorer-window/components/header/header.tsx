import { FC } from "react";
import cn from "classnames";

import { useExplorerWindow } from "shared/explorer-window/providers";
import { EXPLORER_WINDOW_HEADER_TEST_ID } from "@shared/explorer-window/providers/explorer-window-provider/constants";

import { useTaskManager } from "@providers/task-manager-provider/hooks";

import { Actions, CloseButton, Heading } from "./components";

import styles from "./header.module.scss";

export const Header: FC = () => {
  const { headerRef, taskId, disableClose } = useExplorerWindow();
  const { activeTaskId } = useTaskManager();

  return (
    <div
      ref={headerRef}
      className={cn(styles.header, {
        [styles.inactive]: taskId !== activeTaskId,
      })}
      data-testid={EXPLORER_WINDOW_HEADER_TEST_ID}
    >
      <Heading />
      <div className={styles.options}>
        <Actions />
        {!disableClose && <CloseButton />}
      </div>
    </div>
  );
};
