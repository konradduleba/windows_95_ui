import { FC } from "react";
import { Trans } from "@lingui/react";

import { TypographyText } from "@shared/typography";

import { REGISTER_INFO_MESSAGES } from "./translations";

export const RegisterInfo: FC = () => {
  return (
    <TypographyText size="sm">
      <Trans id={REGISTER_INFO_MESSAGES.INFO.id} />
    </TypographyText>
  );
};
