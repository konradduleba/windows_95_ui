import { FC } from "react";

import { TypographyHeading } from "@shared/typography";

import styles from "./windows-95.module.scss";

export const Windows95: FC = () => {
  return (
    <div className={styles.container}>
      <TypographyHeading size="bg" className={styles.windows}>
        Windows95
      </TypographyHeading>
    </div>
  );
};
