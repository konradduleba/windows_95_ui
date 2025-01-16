/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";

import { useTaskManager } from "@providers/task-manager-provider/hooks";

import { ActiveTasks } from "@layouts/active-tasks/active-tasks";

import { LOGIN_USER_TASK } from "@tasks/login-user/constants";

export const UnauthenticatedView: FC = () => {
  const { onAddTask } = useTaskManager();

  useEffect(() => {
    onAddTask(LOGIN_USER_TASK);
  }, []);

  return <ActiveTasks />;
};
