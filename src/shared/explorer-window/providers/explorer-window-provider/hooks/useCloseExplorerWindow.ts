import { useTaskManager } from "@providers/task-manager-provider/hooks";
import { ExplorerWindowProps } from "../types";

type CloseExplorerWindow = Pick<ExplorerWindowProps, "taskId">;

export const useCloseExplorerWindow = ({ taskId }: CloseExplorerWindow) => {
  const { onCloseTask } = useTaskManager();

  const onCloseExplorer = () => {
    onCloseTask(taskId);
  };

  return {
    onCloseExplorer,
  };
};
