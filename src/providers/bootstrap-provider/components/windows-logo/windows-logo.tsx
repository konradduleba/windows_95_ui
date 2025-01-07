import { FC } from "react";

import styles from "./windows-logo.module.scss";

export const WindowsLogo: FC = () => {
  return (
    <div className={styles.container}>
      <img src="windows_95.webp" className={styles.logo} />
    </div>
  );
};
