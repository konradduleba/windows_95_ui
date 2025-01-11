import { FC } from "react";

import { Clock, StartButton, TaskList } from "./components";

import { START_MENU_TEST_ID } from "./constants";

import styles from "./start-menu.module.scss";

export const StartMenu: FC = () => {
  return (
    <div className={styles.startMenuBar} data-testid={START_MENU_TEST_ID}>
      <StartButton />
      <TaskList />
      <Clock />
    </div>
  );
};
