import { FC, PropsWithChildren } from "react";

import styles from "./monitor.module.scss";

export const Monitor: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.monitor}>
      <div className={styles.display}>{children}</div>
      <p className={styles.title}>MacBook Pro</p>
    </div>
  );
};
