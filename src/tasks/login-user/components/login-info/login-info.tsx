import { FC } from "react";
import { Trans } from "@lingui/react";

import { TypographyText } from "@shared/typography";

import { LOGIN_INFO_MESSAGES } from "./translations";

export const LoginInfo: FC = () => {
  return (
    <TypographyText size="sm">
      <Trans id={LOGIN_INFO_MESSAGES.INFO.id} />
    </TypographyText>
  );
};
