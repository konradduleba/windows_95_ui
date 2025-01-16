import { Trans } from "@lingui/react";
import { v4 as uuidv4 } from "uuid";

import SvgSearchInSheet from "@icons/search-in-sheet";

import { FIND_FILES_OR_FOLDERS_TASK } from "@tasks/find-files-or-folders/constants";

import { StartAppApplication, StartAppFolder, StartAppTypes } from "../types";

import { MESSAGES } from "../translations";

const FILES_OR_FOLDERS: StartAppApplication = {
  type: StartAppTypes.APP,
  id: uuidv4(),
  icon: <SvgSearchInSheet />,
  value: <Trans id={MESSAGES.FILES_OR_FOLDERS.id} />,
  task: FIND_FILES_OR_FOLDERS_TASK,
};

export const FIND_FOLDER: StartAppFolder = {
  type: StartAppTypes.FOLDER,
  id: uuidv4(),
  icon: <SvgSearchInSheet />,
  value: <Trans id={MESSAGES.FIND.id} />,
  apps: [FILES_OR_FOLDERS],
};
