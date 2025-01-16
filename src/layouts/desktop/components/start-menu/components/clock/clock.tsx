import { FC } from "react";

import { useTaskManager } from "@providers/task-manager-provider/hooks";

import { DATE_TIME_PROPERTIES_TASK } from "@tasks/date-time-properties/constants";

import { Time } from "./components";

export const Clock: FC = () => {
  const { onAddTask } = useTaskManager();

  const onDoubleClick = () => {
    onAddTask(DATE_TIME_PROPERTIES_TASK);
  };

  return <Time onDoubleClick={onDoubleClick} />;
};
