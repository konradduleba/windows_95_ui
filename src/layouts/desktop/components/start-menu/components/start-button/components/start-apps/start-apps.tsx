import { FC } from "react";

import { AppList, Windows95 } from "./components";

import styles from "./start-apps.module.scss";

export const StartApps: FC = () => {
  return (
    <div className={styles.container}>
      <Windows95 />
      <AppList />
    </div>
  );
};
