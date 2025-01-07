import { FC } from "react";

import SvgNetworkNeighborhood from "@icons/network-neighborhood";

import styles from "./login-icon.module.scss";

export const LoginIcon: FC = () => {
  return (
    <div className={styles.container}>
      <SvgNetworkNeighborhood />
    </div>
  );
};
