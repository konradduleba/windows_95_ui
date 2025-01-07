import { FC } from "react";

import { AmPm, Hours, Minutes, Seconds } from "./components";

import { TIME_INPUTS_CONTAINER_TEST_ID } from "@tasks/date-time-properties/constants";

import styles from "./time-input.module.scss";

export const TimeInput: FC = () => {
  return (
    <div
      className={styles.timeInput}
      data-testid={TIME_INPUTS_CONTAINER_TEST_ID}
    >
      <Hours />
      <Minutes />
      <Seconds />
      <AmPm />
    </div>
  );
};
