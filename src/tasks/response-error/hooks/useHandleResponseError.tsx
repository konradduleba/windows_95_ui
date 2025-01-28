import { v4 as uuidv4 } from "uuid";
import { useTaskManager } from "@providers/task-manager-provider/hooks";
import { Task } from "@providers/task-manager-provider/types";

import { RESPONSE_ERROR_ACCESS } from "@tasks/response-error/constants";
import { ResponseError } from "@tasks/response-error/response-error";

import { ResponseErrorProps } from "../types";

export const useHandleResponseError = () => {
  const { onAddTask } = useTaskManager();

  const onError = (error: ResponseErrorProps) => {
    const errorTask: Task = {
      id: uuidv4(),
      content: <ResponseError {...error} />,
      access: RESPONSE_ERROR_ACCESS,
    };

    onAddTask(errorTask);
  };

  return {
    onError,
  };
};
