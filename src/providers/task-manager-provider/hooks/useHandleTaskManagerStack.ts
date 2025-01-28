import { useState } from "react";

import { Task, TaskId, TaskManagerContextProps } from "../types";

import { useCheckTaskAccess } from "./useCheckTaskAccess";

import { checkIsTaskAlreadyInUse, getAccessDeniedTask } from "../helpers";

export const useHandleTaskManagerStack = (): TaskManagerContextProps => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTaskId, setActiveTaskId] = useState<TaskId>("");
  const { checkTaskAccess } = useCheckTaskAccess();

  const onAddTask = (newTask: Task) => {
    const { access } = newTask;

    const hasAccess = checkTaskAccess(access);

    setTasks((prevTasks: Task[]) => {
      const taskToAdd = hasAccess ? newTask : getAccessDeniedTask();

      const isTaskInUse = checkIsTaskAlreadyInUse(taskToAdd.id, prevTasks);

      setActiveTaskId(taskToAdd.id);

      const newTasks = isTaskInUse ? [...prevTasks] : [...prevTasks, taskToAdd];

      return newTasks;
    });
  };

  const onCloseTask = (taskId: TaskId) => {
    setTasks((prevTasks: Task[]) => {
      return prevTasks.filter(({ id }) => id !== taskId);
    });
  };

  const onMarkAsActiveTask = (taskId: TaskId) => {
    setActiveTaskId(taskId);
  };

  return {
    tasks,
    activeTaskId,
    onAddTask,
    onCloseTask,
    onMarkAsActiveTask,
  };
};
