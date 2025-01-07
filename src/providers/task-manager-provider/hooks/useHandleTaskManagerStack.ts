import { useState } from "react";

import { Task, TaskId, TaskManagerContextProps } from "../types";

import { checkIsTaskAlreadyInUse } from "../helpers";

export const useHandleTaskManagerStack = (): TaskManagerContextProps => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTaskId, setActiveTaskId] = useState<TaskId>("");

  const onAddTask = (newTask: Task) => {
    const { id } = newTask;

    setTasks((prevTasks: Task[]) => {
      const isTaskInUse = checkIsTaskAlreadyInUse(id, prevTasks);

      setActiveTaskId(id);

      const newTasks = isTaskInUse ? [...prevTasks] : [...prevTasks, newTask];

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
