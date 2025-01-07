import { FC } from "react";

import { useTaskManager } from "@providers/task-manager-provider/hooks";
import { Task } from "@providers/task-manager-provider/types";

import { DateTimeProperties } from "@tasks/date-time-properties/date-time-properties";
import { DATE_TIME_PROPERTIES_TASK_ID } from "@tasks/date-time-properties/constants";

import { Time } from "./components";

export const Clock: FC = () => {
  const { onAddTask } = useTaskManager();

  const onDoubleClick = () => {
    const dateTimePropertiesTask: Task = {
      id: DATE_TIME_PROPERTIES_TASK_ID,
      content: <DateTimeProperties />,
    };
    onAddTask(dateTimePropertiesTask);
  };

  return <Time onDoubleClick={onDoubleClick} />;
};
