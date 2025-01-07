import { FC } from "react";
import { Trans } from "@lingui/react";

import { FormTextInput } from "@forms/controllers";

import { REGISTER_USER_FORM_NAME_KEYS } from "../../form/types";
import { REGISTER_USERNAME_TEST_ID } from "../../form/consts";

import { USERNAME_MESSAGES } from "./translations";

export const UsernameInput: FC = () => {
  return (
    <FormTextInput
      label={<Trans id={USERNAME_MESSAGES.LABEL.id} />}
      name={REGISTER_USER_FORM_NAME_KEYS.USERNAME}
      testId={REGISTER_USERNAME_TEST_ID}
    />
  );
};
