import { FC } from "react";

import { DAY_LIST_TEST_ID } from "@tasks/date-time-properties/constants";

import { useGetDayList } from "./hooks";

import { Day } from "./types";

import { AvailableDay, DisabledDay } from "./components";

import styles from "./day-list.module.scss";

export const DayList: FC = () => {
  const { days } = useGetDayList();

  return (
    <ul className={styles.dayList} data-testid={DAY_LIST_TEST_ID}>
      {days.map((day: Day) => {
        const { id, isDisabled } = day;

        if (isDisabled) {
          return <DisabledDay key={id} />;
        }

        return <AvailableDay key={id} {...day} />;
      })}
    </ul>
  );
};
