import { useTaskManager } from "@providers/task-manager-provider/hooks";
import { Task } from "@providers/task-manager-provider/types";

export const useGetListHierarchy = () => {
  const { tasks, activeTaskId } = useTaskManager();

  const reorderedTasks = tasks.reduce((acc: Task[], task: Task) => {
    const { id } = task;

    if (id === activeTaskId) {
      return [...acc, task];
    }

    return [task, ...acc];
  }, []);

  return {
    reorderedTasks,
  };
};
