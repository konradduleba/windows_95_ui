import { v4 as uuidv4 } from "uuid";
import { Trans } from "@lingui/react";

import { useOnClickLogin } from "@tasks/register-user/hooks/useOnClickLogin";

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
  REGISTER_USER_LOGIN_TEST_ID,
  REGISTER_USER_TASK,
  REGISTER_USER_TEST_ID,
  WINDOW_POSITION_Y,
  WINDOW_WIDTH,
} from "../../../constants";

import { REGISTER_USER_MESSAGES } from "../translations";

export const usePrepareTaskWindowData = (): ExplorerWindowProps => {
  const { onClickLogin } = useOnClickLogin();
  const { getWidthTaskCenter } = useGetTaskPositionWidthCenter();
  const WINDOW_ACTIONS: Action[] = [];

  const OK_BUTTON: FooterButton = {
    id: uuidv4(),
    action: ActionTypes.SUBMIT,
    value: <Trans id={TASK_FOOTER_MESSAGES.OK.id} />,
  };

  const CUSTOM_BUTTON: FooterButton = {
    id: uuidv4(),
    testId: REGISTER_USER_LOGIN_TEST_ID,
    action: ActionTypes.CUSTOM,
    value: <Trans id={REGISTER_USER_MESSAGES.LOGIN.id} />,
    onClick: onClickLogin,
  };

  const WINDOW_BUTTONS: FooterButton[] = [OK_BUTTON, CUSTOM_BUTTON];

  const WINDOW_POSITION: Position = {
    x: getWidthTaskCenter(WINDOW_WIDTH),
    y: WINDOW_POSITION_Y,
  };

  return {
    testId: REGISTER_USER_TEST_ID,
    taskId: REGISTER_USER_TASK.id,
    width: WINDOW_WIDTH,
    position: WINDOW_POSITION,
    title: <Trans id={REGISTER_USER_MESSAGES.TITLE.id} />,
    isDraggable: true,
    actions: WINDOW_ACTIONS,
    buttons: WINDOW_BUTTONS,
    footerOnRightSide: true,
    disableClose: true,
  };
};
