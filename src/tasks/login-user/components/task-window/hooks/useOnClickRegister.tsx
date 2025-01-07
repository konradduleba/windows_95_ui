import { useTaskManager } from "@providers/task-manager-provider/hooks";
import { Task } from "@providers/task-manager-provider/types";

import { LOGIN_USER_TASK_ID } from "@tasks/login-user/constants";
import { REGISTER_USER_TASK_ID } from "@tasks/register-user/constants";
import { RegisterUser } from "@tasks/register-user/register-user";

export const useOnClickRegister = () => {
  const { onAddTask, onCloseTask } = useTaskManager();

  const onClickRegister = () => {
    const registerTask: Task = {
      id: REGISTER_USER_TASK_ID,
      content: <RegisterUser />,
    };

    onCloseTask(LOGIN_USER_TASK_ID);
    onAddTask(registerTask);
  };

  return {
    onClickRegister,
  };
};
