import { v4 as uuidv4 } from "uuid";
import { Trans } from "@lingui/react";

import { ResponseSuccessProps } from "@tasks/response-success/response-success";
import { useHandleResponseSuccess } from "@tasks/response-success/hooks";

import {
  ActionTypes,
  FooterButton,
} from "@shared/explorer-window/providers/explorer-window-provider/types";

import { SUBMIT_MESSAGES } from "../translations";

import { REGISTER_USER_SUCCESS_LOGIN_BUTTON_TEST_ID } from "../constants/register-user.consts";
import { useOnClickLogin } from "./useOnClickLogin";

export const useShowSuccessToast = () => {
  const { onClickLogin } = useOnClickLogin();
  const { onSuccess } = useHandleResponseSuccess();

  const showSuccessToast = () => {
    const LOGIN_BUTTON: FooterButton = {
      id: uuidv4(),
      onClick: onClickLogin,
      testId: REGISTER_USER_SUCCESS_LOGIN_BUTTON_TEST_ID,
      action: ActionTypes.CUSTOM,
      value: <Trans id={SUBMIT_MESSAGES.LOGIN_BUTTON.id} />,
    };

    const successProps: ResponseSuccessProps = {
      message: <Trans id={SUBMIT_MESSAGES.SUCCESSFULLY_CREATER_USER.id} />,
      title: <Trans id={SUBMIT_MESSAGES.SUCCESS_TITLE.id} />,
      customButtons: [LOGIN_BUTTON],
    };

    onSuccess(successProps);
  };

  return {
    showSuccessToast,
  };
};
