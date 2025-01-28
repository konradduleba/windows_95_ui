import { FC, Fragment } from "react";

import { useGetListHierarchy } from "./hooks";

export const ActiveTasks: FC = () => {
  const { reorderedTasks } = useGetListHierarchy();

  return (
    <>
      {reorderedTasks.map(({ content, id }) => (
        <Fragment key={id}>{content}</Fragment>
      ))}
    </>
  );
};
