import { Trans } from "@lingui/react";

import { GenericResponseError } from "@api/types";

import { ResponseErrorProps } from "@tasks/response-error/response-error";
import { useHandleResponseError } from "@tasks/response-error/hooks";

import { useGetErrorMessage } from "./useGetErrorMessage";

import { SUBMIT_MESSAGES } from "../translations";

export const useShowErrorToast = () => {
  const { onError } = useHandleResponseError();
  const { getErrorMessage } = useGetErrorMessage();

  const showErrorToast = (errorProps: GenericResponseError) => {
    const customError: ResponseErrorProps = {
      ...errorProps,
      customTitle: <Trans id={SUBMIT_MESSAGES.ERROR_TITLE.id} />,
      customMessage: getErrorMessage(errorProps.statusCode),
    };

    onError(customError);
  };

  return {
    showErrorToast,
  };
};
