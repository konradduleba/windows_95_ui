import { v4 as uuidv4 } from "uuid";
import { Trans } from "@lingui/react";

import {
  Action,
  ActionTypes,
  FooterButton,
  Position,
} from "@shared/explorer-window/providers/explorer-window-provider/types";
import { TASK_FOOTER_MESSAGES } from "@shared/translations";

import {
  FOOTER_ALIGN,
  RESPONSE_SUCCESS_TASK_ID,
  RESPONSE_SUCCESS_TEST_ID,
  WINDOW_POSITION_Y,
  WINDOW_WIDTH,
} from "../../../constants";

import { useGetTaskPositionWidthCenter } from "@shared/explorer-window/hooks";

export const usePrepareTaskWindowData = () => {
  const { getWidthTaskCenter } = useGetTaskPositionWidthCenter();
  const WINDOW_ACTIONS: Action[] = [];

  const OK_BUTTON: FooterButton = {
    id: uuidv4(),
    action: ActionTypes.OK,
    value: <Trans id={TASK_FOOTER_MESSAGES.OK.id} />,
  };

  const WINDOW_BUTTONS: FooterButton[] = [OK_BUTTON];

  const WINDOW_POSITION: Position = {
    x: getWidthTaskCenter(WINDOW_WIDTH),
    y: WINDOW_POSITION_Y,
  };

  return {
    testId: RESPONSE_SUCCESS_TEST_ID,
    taskId: RESPONSE_SUCCESS_TASK_ID,
    width: WINDOW_WIDTH,
    position: WINDOW_POSITION,
    isDraggable: true,
    actions: WINDOW_ACTIONS,
    buttons: WINDOW_BUTTONS,
    footerAlign: FOOTER_ALIGN,
  };
};
