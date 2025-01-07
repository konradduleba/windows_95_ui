import { FC } from "react";

import { useStartApp } from "@providers/start-app-provider/hooks";
import { StartApp } from "@providers/start-app-provider/types";

import { Item, ShutDown } from "./components";

import styles from "./app-list.module.scss";

export const AppList: FC = () => {
  const { apps } = useStartApp();

  return (
    <ul className={styles.list}>
      {apps.map((startApp: StartApp) => (
        <Item key={startApp.id} appProps={startApp} />
      ))}
      <ShutDown />
    </ul>
  );
};
