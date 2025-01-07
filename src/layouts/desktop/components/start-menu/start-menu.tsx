import { FC } from "react";

import { Clock, StartButton, TaskList } from "./components";

import styles from "./start-menu.module.scss";

export const StartMenu: FC = () => {
  return (
    <div className={styles.startMenuBar}>
      <StartButton />
      <TaskList />
      <Clock />
    </div>
  );
};
