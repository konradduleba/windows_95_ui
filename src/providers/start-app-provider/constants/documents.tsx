import { Trans } from "@lingui/react";
import { v4 as uuidv4 } from "uuid";

import SvgDocumentsFolder from "@icons/documents-folder";
import SvgNotepadDocument from "@icons/notepad-document";

import { DOCUMENTS_README_TASK } from "@tasks/documents-readme/constants";

import { StartAppApplication, StartAppFolder, StartAppTypes } from "../types";

import { MESSAGES } from "../translations";

const DOCUMENTS_README: StartAppApplication = {
  type: StartAppTypes.APP,
  id: uuidv4(),
  icon: <SvgNotepadDocument />,
  value: <Trans id={MESSAGES.READ_ME.id} />,
  task: DOCUMENTS_README_TASK,
};

export const DOCUMENT_FOLDER: StartAppFolder = {
  type: StartAppTypes.FOLDER,
  id: uuidv4(),
  icon: <SvgDocumentsFolder />,
  value: <Trans id={MESSAGES.DOCUMENTS.id} />,
  apps: [DOCUMENTS_README],
};
