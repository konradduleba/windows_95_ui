import { Trans } from "@lingui/react";
import { v4 as uuidv4 } from "uuid";

import { DOCUMENTS_README_TASK_ID } from "@constants/task-ids";

import SvgDocumentsFolder from "@icons/documents-folder";
import SvgNotepadDocument from "@icons/notepad-document";

import { DocumentsReadme } from "@tasks/documents-readme/documents-readme";

import { StartAppApplication, StartAppFolder, StartAppTypes } from "../types";

import { MESSAGES } from "../translations";

const DOCUMENTS_README: StartAppApplication = {
  type: StartAppTypes.APP,
  id: DOCUMENTS_README_TASK_ID,
  icon: <SvgNotepadDocument />,
  value: <Trans id={MESSAGES.READ_ME.id} />,
  content: <DocumentsReadme />,
};

export const DOCUMENT_FOLDER: StartAppFolder = {
  type: StartAppTypes.FOLDER,
  id: uuidv4(),
  icon: <SvgDocumentsFolder />,
  value: <Trans id={MESSAGES.DOCUMENTS.id} />,
  apps: [DOCUMENTS_README],
};
