import { Trans } from "@lingui/react";

import { GenericResponseError } from "@api/types";

import { ResponseErrorProps } from "@tasks/response-error/response-error";
import { useHandleResponseError } from "@tasks/response-error/hooks";

import { SUBMIT_MESSAGES } from "../translations";

export const useShowErrorToast = () => {
  const { onError } = useHandleResponseError();

  const showErrorToast = (errorProps: GenericResponseError) => {
    const customError: ResponseErrorProps = {
      ...errorProps,
      customMessage: (
        <Trans id={SUBMIT_MESSAGES.INVALID_USERNAME_OR_PASSWORD.id} />
      ),
      customTitle: <Trans id={SUBMIT_MESSAGES.ERROR_TITLE.id} />,
    };

    onError(customError);
  };

  return {
    showErrorToast,
  };
};
