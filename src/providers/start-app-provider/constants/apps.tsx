import { Trans } from "@lingui/react";

import SvgHelpBook from "@icons/help-book";
import SvgProgramWait from "@icons/program-wait";
import SvgTurnOffDisplay from "@icons/turn-off-display";

import { Run } from "@tasks/run/run";
import { ShutDown } from "@tasks/shut-down/shut-down";
import { Help } from "@tasks/help/help";

import {
  HELP_TASK_ID,
  RUN_TASK_ID,
  SHUT_DOWN_TASK_ID,
} from "@constants/task-ids";

import { StartAppApplication, StartAppTypes } from "../types";

import { MESSAGES } from "../translations";

export const HELP_APP: StartAppApplication = {
  type: StartAppTypes.APP,
  id: HELP_TASK_ID,
  icon: <SvgHelpBook />,
  value: <Trans id={MESSAGES.HELP.id} />,
  content: <Help />,
};

export const RUN_APP: StartAppApplication = {
  type: StartAppTypes.APP,
  id: RUN_TASK_ID,
  icon: <SvgProgramWait />,
  value: <Trans id={MESSAGES.RUN.id} />,
  content: <Run />,
};

export const SHUT_DOWN_APP: StartAppApplication = {
  type: StartAppTypes.APP,
  id: SHUT_DOWN_TASK_ID,
  icon: <SvgTurnOffDisplay />,
  value: <Trans id={MESSAGES.SHUT_DOWN.id} />,
  content: <ShutDown />,
};
