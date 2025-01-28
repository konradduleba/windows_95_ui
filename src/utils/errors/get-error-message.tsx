import { GenericResponseError } from "@api/types";
import { Trans } from "@lingui/react";

import { STATUS_CODE_MESSAGES } from "./translations";

export const getErrorMessage = ({
  response,
  statusCode,
}: GenericResponseError) => {
  const message = STATUS_CODE_MESSAGES[`code${statusCode}`];

  if (message) {
    return <Trans id={message.id || ""} />;
  }

  if (typeof response === "string") {
    return response;
  }

  if ("message" in response) {
    const { message, statusCode } = response;

    return `${message} - ${statusCode}`;
  }

  return "";
};
