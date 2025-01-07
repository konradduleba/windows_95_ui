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
  LOGIN_USER_REGISTER_TEST_ID,
  LOGIN_USER_TASK_ID,
  LOGIN_USER_TEST_ID,
  WINDOW_POSITION_Y,
  WINDOW_WIDTH,
} from "../../../constants";

import { LOGIN_USER_MESSAGES } from "../translations";

import { useOnClickRegister } from "./useOnClickRegister";

export const usePrepareTaskWindowData = (): ExplorerWindowProps => {
  const { getWidthTaskCenter } = useGetTaskPositionWidthCenter();
  const { onClickRegister } = useOnClickRegister();

  const WINDOW_ACTIONS: Action[] = [];

  const OK_BUTTON: FooterButton = {
    id: uuidv4(),
    action: ActionTypes.SUBMIT,
    value: <Trans id={TASK_FOOTER_MESSAGES.OK.id} />,
  };

  const CUSTOM_BUTTON: FooterButton = {
    id: uuidv4(),
    testId: LOGIN_USER_REGISTER_TEST_ID,
    action: ActionTypes.CUSTOM,
    value: <Trans id={LOGIN_USER_MESSAGES.REGISTER.id} />,
    onClick: onClickRegister,
  };

  const WINDOW_BUTTONS: FooterButton[] = [OK_BUTTON, CUSTOM_BUTTON];

  const WINDOW_POSITION: Position = {
    x: getWidthTaskCenter(WINDOW_WIDTH),
    y: WINDOW_POSITION_Y,
  };

  return {
    testId: LOGIN_USER_TEST_ID,
    taskId: LOGIN_USER_TASK_ID,
    width: WINDOW_WIDTH,
    position: WINDOW_POSITION,
    title: <Trans id={LOGIN_USER_MESSAGES.TITLE.id} />,
    isDraggable: true,
    actions: WINDOW_ACTIONS,
    buttons: WINDOW_BUTTONS,
    footerOnRightSide: true,
    disableClose: true,
  };
};
