import { Trans } from "@lingui/react";
import { v4 as uuidv4 } from "uuid";

import SvgProgramFolder from "@icons/program-folder";
import SvgSearchFolder from "@icons/search-folder";
import SvgMSDOS from "@icons/ms-dos";
import SvgNotepad from "@icons/notepad";
import SvgSignWhiteLetter from "@icons/sign-white-letter";
import SvgDiscDrive from "@icons/disc-drive";

import { SCAN_DISK_TASK } from "@tasks/scan-disk/constants";
import { NOTEPAD_TASK } from "@tasks/notepad/constants";
import { ONLINE_REGISTRATION_TASK } from "@tasks/online-registration/constants";
import { MS_DOS_TASK } from "@tasks/ms-dos-prompt/constants";
import { WINDOWS_EXPLORER_TASK } from "@tasks/windows-explorer/constants";

import { StartAppApplication, StartAppFolder, StartAppTypes } from "../types";

import { MESSAGES } from "../translations";

const SCAN_DISK: StartAppApplication = {
  type: StartAppTypes.APP,
  id: uuidv4(),
  icon: <SvgDiscDrive />,
  value: <Trans id={MESSAGES.SCAN_DISK.id} />,
  task: SCAN_DISK_TASK,
};

const SYSTEM_TOOLS_FOLDER: StartAppFolder = {
  type: StartAppTypes.FOLDER,
  id: uuidv4(),
  icon: <SvgProgramFolder />,
  value: <Trans id={MESSAGES.SYSTEM_TOOLS.id} />,
  apps: [SCAN_DISK],
};

const NOTEPAD: StartAppApplication = {
  type: StartAppTypes.APP,
  id: uuidv4(),
  icon: <SvgNotepad />,
  value: <Trans id={MESSAGES.NOTEPAD.id} />,
  task: NOTEPAD_TASK,
};

const ONLINE_REGISTRATION: StartAppApplication = {
  type: StartAppTypes.APP,
  id: uuidv4(),
  icon: <SvgSignWhiteLetter />,
  value: <Trans id={MESSAGES.ONLINE_REGISTRATION.id} />,
  task: ONLINE_REGISTRATION_TASK,
};

const ACCESSORIES_FOLDER: StartAppFolder = {
  type: StartAppTypes.FOLDER,
  id: uuidv4(),
  icon: <SvgProgramFolder />,
  value: <Trans id={MESSAGES.ACCESSORIES.id} />,
  apps: [SYSTEM_TOOLS_FOLDER, NOTEPAD, ONLINE_REGISTRATION],
};

const START_UP_FOLDER: StartAppFolder = {
  type: StartAppTypes.FOLDER,
  id: uuidv4(),
  icon: <SvgProgramFolder />,
  value: <Trans id={MESSAGES.START_UP.id} />,
  apps: [],
};

const MS_DOS_PROMPT: StartAppApplication = {
  type: StartAppTypes.APP,
  id: uuidv4(),
  icon: <SvgMSDOS />,
  value: <Trans id={MESSAGES.MS_DOS_PROMPT.id} />,
  task: MS_DOS_TASK,
};

const WINDOWS_EXPLORER: StartAppApplication = {
  type: StartAppTypes.APP,
  id: uuidv4(),
  icon: <SvgSearchFolder />,
  value: <Trans id={MESSAGES.WINDOWS_EXPLORER.id} />,
  task: WINDOWS_EXPLORER_TASK,
};

export const PROGRAMS_FOLDER: StartAppFolder = {
  type: StartAppTypes.FOLDER,
  id: uuidv4(),
  icon: <SvgProgramFolder />,
  value: <Trans id={MESSAGES.PROGRAMS.id} />,
  apps: [ACCESSORIES_FOLDER, START_UP_FOLDER, MS_DOS_PROMPT, WINDOWS_EXPLORER],
};
