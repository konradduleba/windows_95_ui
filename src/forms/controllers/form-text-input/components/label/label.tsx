import { FC, LabelHTMLAttributes, PropsWithChildren } from "react";

import { TypographyText } from "@shared/typography";

import styles from "./label.module.scss";

export const Label: FC<
  PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>
> = (props) => {
  return (
    <label {...props} className={styles.label}>
      <TypographyText size="sm">{props.children}</TypographyText>
    </label>
  );
};
