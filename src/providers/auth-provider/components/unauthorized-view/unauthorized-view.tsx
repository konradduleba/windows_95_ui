/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";

import { useTaskManager } from "@providers/task-manager-provider/hooks";
import { Task } from "@providers/task-manager-provider/types";

import { ActiveTasks } from "@layouts/active-tasks/active-tasks";

import { LOGIN_USER_TASK_ID } from "@tasks/login-user/constants";
import { LoginUser } from "@tasks/login-user/login-user";

export const UnauthorizedView: FC = () => {
  const { onAddTask } = useTaskManager();

  useEffect(() => {
    const loginUserTask: Task = {
      id: LOGIN_USER_TASK_ID,
      content: <LoginUser />,
    };

    onAddTask(loginUserTask);
  }, []);

  return <ActiveTasks />;
};
