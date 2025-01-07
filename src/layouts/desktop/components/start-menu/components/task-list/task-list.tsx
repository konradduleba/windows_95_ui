import { FC } from "react";

import styles from "./task-list.module.scss";

const TEST_TASK_LIST: [] = [];

export const TaskList: FC = () => {
  if (!TEST_TASK_LIST.length) {
    return null;
  }

  return (
    <div className={styles.taskList}>
      {TEST_TASK_LIST.map(() => (
        <p>Test</p>
      ))}
    </div>
  );
};
