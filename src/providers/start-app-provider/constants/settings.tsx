import { Trans } from "@lingui/react";
import { v4 as uuidv4 } from "uuid";

import SvgControlsFolder from "@icons/controls-folder";
import SvgSettings from "@icons/settings";
import SvgPrintersFolder from "@icons/printers-folder";
import Svg3DText from "@icons/3d-text";

import { CONTROL_PANEL_TASK } from "@tasks/control-panel/constants";
import { PRINTERS_TASK } from "@tasks/printers/constants";
import { TASKBAR_TASK } from "@tasks/taskbar/constants";

import { StartAppApplication, StartAppFolder, StartAppTypes } from "../types";

import { MESSAGES } from "../translations";

const CONTROL_PANEL: StartAppApplication = {
  type: StartAppTypes.APP,
  id: uuidv4(),
  icon: <SvgControlsFolder />,
  value: <Trans id={MESSAGES.CONTROL_PANEL.id} />,
  task: CONTROL_PANEL_TASK,
};

const PRINTERS: StartAppApplication = {
  type: StartAppTypes.APP,
  id: uuidv4(),
  icon: <SvgPrintersFolder />,
  value: <Trans id={MESSAGES.PRINTERS.id} />,
  task: PRINTERS_TASK,
};

const TASKBAR: StartAppApplication = {
  type: StartAppTypes.APP,
  id: uuidv4(),
  icon: <Svg3DText />,
  value: <Trans id={MESSAGES.TASKBAR.id} />,
  task: TASKBAR_TASK,
};

export const SETTINGS_FOLDER: StartAppFolder = {
  type: StartAppTypes.FOLDER,
  id: uuidv4(),
  icon: <SvgSettings />,
  value: <Trans id={MESSAGES.SETTINGS.id} />,
  apps: [CONTROL_PANEL, PRINTERS, TASKBAR],
};
