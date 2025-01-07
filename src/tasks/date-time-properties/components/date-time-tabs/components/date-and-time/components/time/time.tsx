import { FC } from "react";
import { Trans } from "@lingui/react";

import { ContentBox } from "shared/content-box/content-box";
import { TypographyText } from "@shared/typography";

import { ClockFace, TimeInput } from "./components";

import { MESSAGES } from "./translations";

import styles from "./time.module.scss";

export const Time: FC = () => {
  return (
    <ContentBox
      title={
        <TypographyText size="sm">
          <Trans id={MESSAGES.TITLE.id} />
        </TypographyText>
      }
    >
      <div className={styles.container}>
        <ClockFace />
        <TimeInput />
      </div>
    </ContentBox>
  );
};
