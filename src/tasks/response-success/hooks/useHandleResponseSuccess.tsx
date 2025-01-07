import { useTaskManager } from "@providers/task-manager-provider/hooks";
import { Task } from "@providers/task-manager-provider/types";

import { ResponseSuccess, ResponseSuccessProps } from "../response-success";

import { RESPONSE_SUCCESS_TASK_ID } from "../constants";

export const useHandleResponseSuccess = () => {
  const { onAddTask } = useTaskManager();

  const onSuccess = (props: ResponseSuccessProps) => {
    const successTask: Task = {
      id: RESPONSE_SUCCESS_TASK_ID,
      content: <ResponseSuccess {...props} />,
    };

    onAddTask(successTask);
  };

  return {
    onSuccess,
  };
};
