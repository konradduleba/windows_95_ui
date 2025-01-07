import { FC } from "react";

import SvgUserWithComputer from "@icons/user-with-computer";

import styles from "./register-icon.module.scss";

export const RegisterIcon: FC = () => {
  return (
    <div className={styles.container}>
      <SvgUserWithComputer className={styles.icon} />
    </div>
  );
};
