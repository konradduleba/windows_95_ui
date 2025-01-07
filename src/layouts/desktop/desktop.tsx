import { FC } from "react";

import { StartMenu } from "./components";

import styles from "./desktop.module.scss";

export const Desktop: FC = () => {
  return (
    <div className={styles.desktop}>
      <div></div>
      <StartMenu />
    </div>
  );
};
