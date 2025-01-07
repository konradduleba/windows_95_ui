import { Trans } from "@lingui/react";
import { v4 as uuidv4 } from "uuid";

import {
  CONTROL_PANEL_TASK_ID,
  PRINTERS_TASK_ID,
  TASKBAR_TASK_ID,
} from "@constants/task-ids";

import SvgControlsFolder from "@icons/controls-folder";
import SvgSettings from "@icons/settings";
import SvgPrintersFolder from "@icons/printers-folder";
import Svg3DText from "@icons/3d-text";

import { ControlPanel } from "@tasks/control-panel/control-panel";
import { Printers } from "@tasks/printers/printers";
import { Taskbar } from "@tasks/taskbar/taskbar";

import { StartAppApplication, StartAppFolder, StartAppTypes } from "../types";

import { MESSAGES } from "../translations";

const CONTROL_PANEL: StartAppApplication = {
  type: StartAppTypes.APP,
  id: CONTROL_PANEL_TASK_ID,
  icon: <SvgControlsFolder />,
  value: <Trans id={MESSAGES.CONTROL_PANEL.id} />,
  content: <ControlPanel />,
};

const PRINTERS: StartAppApplication = {
  type: StartAppTypes.APP,
  id: PRINTERS_TASK_ID,
  icon: <SvgPrintersFolder />,
  value: <Trans id={MESSAGES.PRINTERS.id} />,
  content: <Printers />,
};

const TASKBAR: StartAppApplication = {
  type: StartAppTypes.APP,
  id: TASKBAR_TASK_ID,
  icon: <Svg3DText />,
  value: <Trans id={MESSAGES.TASKBAR.id} />,
  content: <Taskbar />,
};

export const SETTINGS_FOLDER: StartAppFolder = {
  type: StartAppTypes.FOLDER,
  id: uuidv4(),
  icon: <SvgSettings />,
  value: <Trans id={MESSAGES.SETTINGS.id} />,
  apps: [CONTROL_PANEL, PRINTERS, TASKBAR],
};
