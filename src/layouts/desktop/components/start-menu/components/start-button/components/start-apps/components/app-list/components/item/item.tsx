import { FC } from "react";

import { useTaskManager } from "@providers/task-manager-provider/hooks";
import { StartApp, StartAppTypes } from "@providers/start-app-provider/types";

import { ItemRow, SubApps } from "./components";

type ItemProps = {
  depth?: number;
  appProps: StartApp;
};

export const Item: FC<ItemProps> = ({ appProps, depth = 0 }) => {
  const { icon, type, value } = appProps;
  const { onAddTask } = useTaskManager();

  if (type === StartAppTypes.APP) {
    const { task } = appProps;

    const onClickApp = () => {
      onAddTask(task);
    };

    return <ItemRow icon={icon} value={value} onClick={onClickApp} />;
  }

  const { apps } = appProps;

  return (
    <ItemRow icon={icon} value={value} hasOptions>
      {apps.length ? (
        <SubApps smallSize={!depth}>
          {apps.map((appProps: StartApp) => (
            <Item key={appProps.id} appProps={appProps} depth={depth + 1} />
          ))}
        </SubApps>
      ) : null}
    </ItemRow>
  );
};
