import { v4 as uuidv4 } from "uuid";
import { Trans } from "@lingui/react";

import { ExplorerWindowProps } from "@shared/explorer-window/providers";
import {
  Action,
  ActionTypes,
  FooterButton,
  Position,
} from "@shared/explorer-window/providers/explorer-window-provider/types";
import { TASK_FOOTER_MESSAGES } from "@shared/translations";
import { useGetTaskPositionWidthCenter } from "@shared/explorer-window/hooks";

import {
  FOOTER_ALIGN,
  RESPONSE_ERROR_TEST_ID,
  WINDOW_POSITION_Y,
  WINDOW_WIDTH,
} from "../../../constants";

import { RESPONSE_ERROR_MESSAGES } from "../translations";

export const usePrepareTaskWindowData = (): ExplorerWindowProps => {
  const { getWidthTaskCenter } = useGetTaskPositionWidthCenter();
  const WINDOW_ACTIONS: Action[] = [];

  const OK_BUTTON: FooterButton = {
    id: uuidv4(),
    action: ActionTypes.OK,
    value: <Trans id={TASK_FOOTER_MESSAGES.OK.id} />,
  };

  const TITLE = <Trans id={RESPONSE_ERROR_MESSAGES.TITLE.id} />;

  const WINDOW_BUTTONS: FooterButton[] = [OK_BUTTON];

  const WINDOW_POSITION: Position = {
    x: getWidthTaskCenter(WINDOW_WIDTH),
    y: WINDOW_POSITION_Y,
  };

  return {
    testId: RESPONSE_ERROR_TEST_ID,
    taskId: uuidv4(),
    width: WINDOW_WIDTH,
    position: WINDOW_POSITION,
    title: TITLE,
    isDraggable: true,
    actions: WINDOW_ACTIONS,
    buttons: WINDOW_BUTTONS,
    footerAlign: FOOTER_ALIGN,
  };
};
