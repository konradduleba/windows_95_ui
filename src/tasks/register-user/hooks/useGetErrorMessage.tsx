import { Trans } from "@lingui/react";

import { SUBMIT_MESSAGES } from "../translations";

export const useGetErrorMessage = () => {
  const getErrorMessage = (statusCode: number) => {
    if (statusCode === 409) {
      return <Trans id={SUBMIT_MESSAGES.USERNAME_OR_EMAIL_EXISTS.id} />;
    }

    return <Trans id={SUBMIT_MESSAGES.SOMETHING_WENT_WRONG.id} />;
  };

  return {
    getErrorMessage,
  };
};
