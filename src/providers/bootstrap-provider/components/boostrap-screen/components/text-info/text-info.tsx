import { FC, PropsWithChildren } from "react";

import { TypographyText } from "@shared/typography";

import styles from "./text-info.module.scss";

export const TextInfo: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TypographyText size="md" className={styles.text}>
      {children}
    </TypographyText>
  );
};
