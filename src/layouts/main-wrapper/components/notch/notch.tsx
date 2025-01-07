import { FC } from "react";

import styles from "./notch.module.scss";

export const Notch: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.notch} />
    </div>
  );
};
