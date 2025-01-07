import { FC } from "react";

import { TypographyHeading } from "@shared/typography";

import { DAY_CHARS } from "./constants";

import styles from "./days-of-the-week.module.scss";

export const DaysOfTheWeek: FC = () => {
  return (
    <div className={styles.daysOfTheWeek}>
      {DAY_CHARS.map((letter, index) => (
        <TypographyHeading
          key={`${letter}-${index}`}
          size="sm"
          className={styles.letter}
        >
          {letter}
        </TypographyHeading>
      ))}
    </div>
  );
};
