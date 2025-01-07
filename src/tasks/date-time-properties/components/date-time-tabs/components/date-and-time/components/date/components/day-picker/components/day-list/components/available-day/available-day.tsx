import { FC } from "react";
import cn from "classnames";
import { useController } from "react-hook-form";

import { TypographyText } from "@shared/typography";

import { DATE_TIME_FORM_NAME_KEYS } from "@tasks/date-time-properties/form/types";
import { DATE_TIME_DAY_TEST_ID } from "@tasks/date-time-properties/form/consts";
import { DAY_AVAILABLE_ITEM_TEST_ID } from "@tasks/date-time-properties/constants";

import { AvailableDayTypes } from "../../types";

import styles from "./available-day.module.scss";

export const AvailableDay: FC<AvailableDayTypes> = ({ isSelected, value }) => {
  const { field } = useController({ name: DATE_TIME_FORM_NAME_KEYS.DAY });

  let testId = DAY_AVAILABLE_ITEM_TEST_ID;

  if (isSelected) {
    testId += ` ${DATE_TIME_DAY_TEST_ID}`;
  }

  return (
    <li
      className={cn(styles.day, { [styles.selected]: isSelected })}
      onClick={() => field.onChange(value)}
      data-testid={testId}
    >
      <TypographyText
        size="sm"
        className={cn({ [styles.textSelected]: isSelected })}
      >
        {value}
      </TypographyText>
    </li>
  );
};
