import { Trans } from "@lingui/react";
import { v4 as uuidv4 } from "uuid";

import {
  MS_DOS_PROMPT_TASK_ID,
  NOTEPAD_TASK_ID,
  ONLINE_REGISTRATION_TASK_ID,
  SCAN_DISK_TASK_ID,
  WINDOWS_EXPLORER_TASK_ID,
} from "@constants/task-ids";

import SvgProgramFolder from "@icons/program-folder";
import SvgSearchFolder from "@icons/search-folder";
import SvgMSDOS from "@icons/ms-dos";
import SvgNotepad from "@icons/notepad";
import SvgSignWhiteLetter from "@icons/sign-white-letter";
import SvgDiscDrive from "@icons/disc-drive";

import { WindowsExplorer } from "@tasks/windows-explorer/windows-explorer";
import { MsDOSPrompt } from "@tasks/ms-dos-prompt/ms-dos-prompt";
import { Notepad } from "@tasks/notepad/notepad";
import { OnlineRegistration } from "@tasks/online-registration/online-registration";
import { ScanDisk } from "@tasks/scan-disk/scan-disk";

import { StartAppApplication, StartAppFolder, StartAppTypes } from "../types";

import { MESSAGES } from "../translations";

const SCAN_DISK: StartAppApplication = {
  type: StartAppTypes.APP,
  id: SCAN_DISK_TASK_ID,
  icon: <SvgDiscDrive />,
  value: <Trans id={MESSAGES.SCAN_DISK.id} />,
  content: <ScanDisk />,
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
  id: NOTEPAD_TASK_ID,
  icon: <SvgNotepad />,
  value: <Trans id={MESSAGES.NOTEPAD.id} />,
  content: <Notepad />,
};

const ONLINE_REGISTRATION: StartAppApplication = {
  type: StartAppTypes.APP,
  id: ONLINE_REGISTRATION_TASK_ID,
  icon: <SvgSignWhiteLetter />,
  value: <Trans id={MESSAGES.ONLINE_REGISTRATION.id} />,
  content: <OnlineRegistration />,
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
  id: MS_DOS_PROMPT_TASK_ID,
  icon: <SvgMSDOS />,
  value: <Trans id={MESSAGES.MS_DOS_PROMPT.id} />,
  content: <MsDOSPrompt />,
};

const WINDOWS_EXPLORER: StartAppApplication = {
  type: StartAppTypes.APP,
  id: WINDOWS_EXPLORER_TASK_ID,
  icon: <SvgSearchFolder />,
  value: <Trans id={MESSAGES.WINDOWS_EXPLORER.id} />,
  content: <WindowsExplorer />,
};

export const PROGRAMS_FOLDER: StartAppFolder = {
  type: StartAppTypes.FOLDER,
  id: uuidv4(),
  icon: <SvgProgramFolder />,
  value: <Trans id={MESSAGES.PROGRAMS.id} />,
  apps: [ACCESSORIES_FOLDER, START_UP_FOLDER, MS_DOS_PROMPT, WINDOWS_EXPLORER],
};
