import { FC } from "react";
import { Trans } from "@lingui/react";

import { FormTextInput } from "@forms/controllers";

import { REGISTER_USER_FORM_NAME_KEYS } from "../../form/types";
import { REGISTER_EMAIL_TEST_ID } from "../../form/consts";

import { EMAIL_MESSAGES } from "./translations";

export const EmailInput: FC = () => {
  return (
    <FormTextInput
      label={<Trans id={EMAIL_MESSAGES.LABEL.id} />}
      name={REGISTER_USER_FORM_NAME_KEYS.EMAIL}
      testId={REGISTER_EMAIL_TEST_ID}
    />
  );
};
