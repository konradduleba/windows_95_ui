import {
  DOCUMENT_FOLDER,
  FIND_FOLDER,
  HELP_APP,
  PROGRAMS_FOLDER,
  RUN_APP,
  SETTINGS_FOLDER,
} from "../constants";

import { StartApp, StartAppContextProps } from "../types";

export const useHandleStartAppList = (): StartAppContextProps => {
  const apps: StartApp[] = [
    PROGRAMS_FOLDER,
    DOCUMENT_FOLDER,
    SETTINGS_FOLDER,
    FIND_FOLDER,
    HELP_APP,
    RUN_APP,
  ];

  return {
    apps,
  };
};
