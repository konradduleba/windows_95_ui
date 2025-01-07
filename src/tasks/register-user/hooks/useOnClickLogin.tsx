import { useTaskManager } from "@providers/task-manager-provider/hooks";
import { Task } from "@providers/task-manager-provider/types";

import { LOGIN_USER_TASK_ID } from "@tasks/login-user/constants";
import { LoginUser } from "@tasks/login-user/login-user";
import { REGISTER_USER_TASK_ID } from "@tasks/register-user/constants";
import { RESPONSE_SUCCESS_TASK_ID } from "@tasks/response-success/constants";

export const useOnClickLogin = () => {
  const { onAddTask, onCloseTask } = useTaskManager();

  const onClickLogin = () => {
    const loginTask: Task = {
      id: LOGIN_USER_TASK_ID,
      content: <LoginUser />,
    };

    onCloseTask(REGISTER_USER_TASK_ID);
    onCloseTask(RESPONSE_SUCCESS_TASK_ID);
    onAddTask(loginTask);
  };

  return {
    onClickLogin,
  };
};
