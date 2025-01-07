import { FC } from "react";
import { Trans } from "@lingui/react";

import { useDateTime } from "@providers/date-time-provider/hooks";

import { TypographyText } from "@shared/typography";

import { MESSAGES } from "./translations";

export const TimeZone: FC = () => {
  const { timeZone } = useDateTime();
  const { name } = timeZone;

  return (
    <TypographyText size="sm">
      <Trans id={MESSAGES.TIME_ZONE.id} /> {name}
    </TypographyText>
  );
};
