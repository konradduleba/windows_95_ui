import { useTaskManager } from "@providers/task-manager-provider/hooks";
import { Task } from "@providers/task-manager-provider/types";

import { RESPONSE_ERROR_TASK_ID } from "@tasks/response-error/constants";
import {
  ResponseError,
  ResponseErrorProps,
} from "@tasks/response-error/response-error";

export const useHandleResponseError = () => {
  const { onAddTask } = useTaskManager();

  const onError = (error: ResponseErrorProps) => {
    const errorTask: Task = {
      id: RESPONSE_ERROR_TASK_ID,
      content: <ResponseError {...error} />,
    };

    onAddTask(errorTask);
  };

  return {
    onError,
  };
};
