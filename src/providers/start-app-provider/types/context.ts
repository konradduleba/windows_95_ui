import { Task } from "@providers/task-manager-provider/types";
import { ReactNode } from "react";

export enum StartAppTypes {
  APP = "app",
  FOLDER = "folder",
}

export type StartAppCommonTypes = {
  id: string;
  icon: ReactNode;
  value: ReactNode;
};

export type StartAppFolder = StartAppCommonTypes & {
  type: StartAppTypes.FOLDER;
  apps: StartApp[];
};

export type StartAppApplication = StartAppCommonTypes & {
  type: StartAppTypes.APP;
  task: Task;
};

export type StartApp = StartAppFolder | StartAppApplication;

export type StartAppContextProps = {
  apps: StartApp[];
};
