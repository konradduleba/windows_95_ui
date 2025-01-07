import { FC } from "react";

import { ProgressIndicator } from "@providers/bootstrap-provider/types";

import { FetchInfo, FetchList, Title } from "./components";

import styles from "./bootstrap-screen.module.scss";

type BootstrapScreenProps = {
  progress: number;
  progressIndicator: ProgressIndicator;
};

export const BootstrapScreen: FC<BootstrapScreenProps> = ({
  progress,
  progressIndicator,
}) => {
  return (
    <div className={styles.container}>
      <Title />
      <FetchInfo progress={progress} />
      <FetchList list={progressIndicator} />
    </div>
  );
};
