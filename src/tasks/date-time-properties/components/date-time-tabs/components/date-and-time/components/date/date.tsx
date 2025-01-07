import { FC } from "react";
import { Trans } from "@lingui/react";

import { ContentBox } from "shared/content-box/content-box";
import { TypographyText } from "@shared/typography";

import { DayPicker, MonthSelect, YearPicker } from "./components";

import { MESSAGES } from "./translations";

import styles from "./date.module.scss";

export const Date: FC = () => {
  return (
    <ContentBox
      title={
        <TypographyText size="sm">
          <Trans id={MESSAGES.TITLE.id} />
        </TypographyText>
      }
    >
      <div className={styles.container}>
        <div className={styles.monthAndYear}>
          <MonthSelect />
          <YearPicker />
        </div>
        <DayPicker />
      </div>
    </ContentBox>
  );
};
