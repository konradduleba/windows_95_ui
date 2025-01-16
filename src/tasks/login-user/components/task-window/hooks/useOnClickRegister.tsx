import { useTaskManager } from "@providers/task-manager-provider/hooks";

import { LOGIN_USER_TASK } from "@tasks/login-user/constants";
import { REGISTER_USER_TASK } from "@tasks/register-user/constants";

export const useOnClickRegister = () => {
  const { onAddTask, onCloseTask } = useTaskManager();

  const onClickRegister = () => {
    onCloseTask(LOGIN_USER_TASK.id);
    onAddTask(REGISTER_USER_TASK);
  };

  return {
    onClickRegister,
  };
};
