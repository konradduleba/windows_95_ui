import { FC } from "react";
import { Trans } from "@lingui/react";

import { FormTextInput } from "@forms/controllers";

import {
  REGISTER_AUTO_COMPLETE_KEYS,
  REGISTER_USER_FORM_NAME_KEYS,
} from "../../form/types";
import { REGISTER_CONFIRM_PASSWORD_TEST_ID } from "../../form/consts";

import { CONFIRM_PASSWORD_MESSAGES } from "./translations";

export const ConfirmPasswordInput: FC = () => {
  return (
    <FormTextInput
      label={<Trans id={CONFIRM_PASSWORD_MESSAGES.LABEL.id} />}
      name={REGISTER_USER_FORM_NAME_KEYS.CONFIRM_PASSWORD}
      testId={REGISTER_CONFIRM_PASSWORD_TEST_ID}
      autocompleteId={REGISTER_AUTO_COMPLETE_KEYS.PASSWORD}
      isPassword
    />
  );
};
