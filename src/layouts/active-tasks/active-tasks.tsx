import { FC, Fragment } from "react";

import { useTaskManager } from "@providers/task-manager-provider/hooks";

export const ActiveTasks: FC = () => {
  const { tasks } = useTaskManager();

  return (
    <>
      {tasks.map(({ content, id }) => (
        <Fragment key={id}>{content}</Fragment>
      ))}
    </>
  );
};
