import { Trans } from "@lingui/react";
import { v4 as uuidv4 } from "uuid";

import { FIND_FILES_OR_FOLDERS_TASK_ID } from "@constants/task-ids";

import SvgSearchInSheet from "@icons/search-in-sheet";

import { FindFilesOrFolders } from "@tasks/find-files-or-folders/find-files-or-folders";

import { StartAppApplication, StartAppFolder, StartAppTypes } from "../types";

import { MESSAGES } from "../translations";

const FILES_OR_FOLDERS: StartAppApplication = {
  type: StartAppTypes.APP,
  id: FIND_FILES_OR_FOLDERS_TASK_ID,
  icon: <SvgSearchInSheet />,
  value: <Trans id={MESSAGES.FILES_OR_FOLDERS.id} />,
  content: <FindFilesOrFolders />,
};

export const FIND_FOLDER: StartAppFolder = {
  type: StartAppTypes.FOLDER,
  id: uuidv4(),
  icon: <SvgSearchInSheet />,
  value: <Trans id={MESSAGES.FIND.id} />,
  apps: [FILES_OR_FOLDERS],
};
