import { FC } from "react";

import { TypographyHeading } from "@shared/typography";
import { Tooltip } from "@shared/tooltip/tooltip";

import { useDateTime } from "@providers/date-time-provider/hooks";

import { START_MENU_CLOCK_TEST_ID } from "../constants";

import styles from "./time.module.scss";

type TimeProps = {
  onDoubleClick: () => void;
};

export const Time: FC<TimeProps> = ({ onDoubleClick }) => {
  const { AM_PM, formatted, basic } = useDateTime();
  const { hoursIn12hourFormat, minutes, dayName, monthName, day } = formatted;
  const { year } = basic;

  const message = `${dayName}, ${monthName} ${day}, ${year}`;

  return (
    <Tooltip message={message} placement="topRight">
      <div
        className={styles.time}
        onDoubleClick={onDoubleClick}
        data-testid={START_MENU_CLOCK_TEST_ID}
      >
        <TypographyHeading size="sm">
          {hoursIn12hourFormat}:{minutes}
        </TypographyHeading>
        <TypographyHeading size="sm">{AM_PM}</TypographyHeading>
      </div>
    </Tooltip>
  );
};
