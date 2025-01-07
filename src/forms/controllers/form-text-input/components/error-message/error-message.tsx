import { FC } from "react";
import { Trans } from "@lingui/react";

import { TypographyText } from "@shared/typography";

import styles from "./error-message.module.scss";

type ErrorMessageProps = {
  messageId: string;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({ messageId }) => {
  return (
    <TypographyText size="sm" className={styles.error}>
      <Trans id={messageId} />
    </TypographyText>
  );
};
