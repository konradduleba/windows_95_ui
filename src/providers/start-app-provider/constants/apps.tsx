import { v4 as uuidv4 } from "uuid";
import { Trans } from "@lingui/react";

import SvgHelpBook from "@icons/help-book";
import SvgProgramWait from "@icons/program-wait";
import SvgTurnOffDisplay from "@icons/turn-off-display";

import { HELP_TASK } from "@tasks/help/constants";
import { RUN_TASK } from "@tasks/run/constants";
import { SHUT_DOWN_TASK } from "@tasks/shut-down/constants";

import { StartAppApplication, StartAppTypes } from "../types";

import { MESSAGES } from "../translations";

export const HELP_APP: StartAppApplication = {
  type: StartAppTypes.APP,
  id: uuidv4(),
  icon: <SvgHelpBook />,
  value: <Trans id={MESSAGES.HELP.id} />,
  task: HELP_TASK,
};

export const RUN_APP: StartAppApplication = {
  type: StartAppTypes.APP,
  id: uuidv4(),
  icon: <SvgProgramWait />,
  value: <Trans id={MESSAGES.RUN.id} />,
  task: RUN_TASK,
};

export const SHUT_DOWN_APP: StartAppApplication = {
  type: StartAppTypes.APP,
  id: uuidv4(),
  icon: <SvgTurnOffDisplay />,
  value: <Trans id={MESSAGES.SHUT_DOWN.id} />,
  task: SHUT_DOWN_TASK,
};
