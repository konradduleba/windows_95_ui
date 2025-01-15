import { FC } from "react";
import { Trans } from "@lingui/react";

import { FormTextInput } from "@forms/controllers";

import {
  LOGIN_AUTO_COMPLETE_KEYS,
  LOGIN_USER_FORM_NAME_KEYS,
} from "../../form/types";
import { LOGIN_PASSWORD_TEST_ID } from "../../form/consts";

import { PASSWORD_MESSAGES } from "./translations";

export const PasswordInput: FC = () => {
  return (
    <FormTextInput
      label={<Trans id={PASSWORD_MESSAGES.LABEL.id} />}
      name={LOGIN_USER_FORM_NAME_KEYS.PASSWORD}
      testId={LOGIN_PASSWORD_TEST_ID}
      autocompleteId={LOGIN_AUTO_COMPLETE_KEYS.PASSWORD}
      isPassword
    />
  );
};
