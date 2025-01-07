import { FC } from "react";
import { Trans } from "@lingui/react";
import { FormCheckbox } from "@forms/controllers";

import { DATE_TIME_FORM_NAME_KEYS } from "@tasks/date-time-properties/form/types";
import { ADJUST_CLOCK_TEST_ID } from "@tasks/date-time-properties/constants/date-time-properties.consts";

import { TypographyText } from "@shared/typography";

import { MESSAGES } from "./translations";

export const AdjustClock: FC = () => {
  return (
    <FormCheckbox
      name={DATE_TIME_FORM_NAME_KEYS.ADJUST_CLOCK}
      testId={ADJUST_CLOCK_TEST_ID}
      label={
        <TypographyText size="sm">
          <Trans id={MESSAGES.ADJUST_CLOCK.id} />
        </TypographyText>
      }
    />
  );
};
