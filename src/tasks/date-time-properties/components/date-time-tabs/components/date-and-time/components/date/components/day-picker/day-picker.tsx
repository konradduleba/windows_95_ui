import { FC } from "react";

import { DayList, DaysOfTheWeek } from "./components";

import styles from "./day-picker.module.scss";

export const DayPicker: FC = () => {
  return (
    <div className={styles.container}>
      <DaysOfTheWeek />
      <DayList />
    </div>
  );
};
