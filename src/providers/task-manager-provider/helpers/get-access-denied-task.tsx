import { v4 as uuidv4 } from "uuid";
import { Trans } from "@lingui/react";

import { RESPONSE_ERROR_ACCESS } from "@tasks/response-error/constants";
import { ResponseError } from "@tasks/response-error/response-error";
import {
  CustomResponseError,
  ResponseErrorTypes,
} from "@tasks/response-error/types";

import { Task } from "../types";

import { TASK_MANAGER_MESSAGES } from "../translations";

export const getAccessDeniedTask = (): Task => {
  const TASK_ID = uuidv4();

  const errorProps: CustomResponseError = {
    type: ResponseErrorTypes.CUSTOM,
    id: TASK_ID,
    message: <Trans id={TASK_MANAGER_MESSAGES.ACCESS_DENIED_MESSAGE.id} />,
    title: <Trans id={TASK_MANAGER_MESSAGES.ACCESS_DENIED_TITLE.id} />,
  };

  return {
    id: TASK_ID,
    access: RESPONSE_ERROR_ACCESS,
    content: <ResponseError {...errorProps} />,
  };
};
