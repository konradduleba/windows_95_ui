import { useTaskManager } from "@providers/task-manager-provider/hooks";

import { LOGIN_USER_TASK } from "@tasks/login-user/constants";
import { REGISTER_USER_TASK } from "@tasks/register-user/constants";
import { RESPONSE_SUCCESS_TASK_ID } from "@tasks/response-success/constants";

export const useOnClickLogin = () => {
  const { onAddTask, onCloseTask } = useTaskManager();

  const onClickLogin = () => {
    onCloseTask(REGISTER_USER_TASK.id);
    onCloseTask(RESPONSE_SUCCESS_TASK_ID);
    onAddTask(LOGIN_USER_TASK);
  };

  return {
    onClickLogin,
  };
};
