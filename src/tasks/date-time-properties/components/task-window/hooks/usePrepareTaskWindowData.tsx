import { v4 as uuidv4 } from "uuid";
import { useFormContext } from "react-hook-form";
import { Trans } from "@lingui/react";

import { ExplorerWindowProps } from "@shared/explorer-window/providers";
import {
  Action,
  ActionTypes,
  FooterButton,
} from "@shared/explorer-window/providers/explorer-window-provider/types";
import { TASK_FOOTER_MESSAGES } from "@shared/translations";

import {
  DATE_TIME_PROPERTIES_TASK,
  DATE_TIME_TEST_ID,
  WINDOW_POSITION,
  WINDOW_TITLE,
  WINDOW_WIDTH,
} from "@tasks/date-time-properties/constants";

export const usePrepareTaskWindowData = (): ExplorerWindowProps => {
  const { formState } = useFormContext();

  const WINDOW_ACTIONS: Action[] = [];

  const OK_BUTTON: FooterButton = {
    id: uuidv4(),
    action: ActionTypes.OK,
    value: <Trans id={TASK_FOOTER_MESSAGES.OK.id} />,
  };

  const CANCEL_BUTTON: FooterButton = {
    id: uuidv4(),
    action: ActionTypes.CLOSE,
    value: <Trans id={TASK_FOOTER_MESSAGES.CANCEL.id} />,
  };

  const APPLY_BUTTON: FooterButton = {
    id: uuidv4(),
    action: ActionTypes.SUBMIT,
    disabled: !formState.isDirty,
    value: <Trans id={TASK_FOOTER_MESSAGES.SUBMIT.id} />,
  };

  const WINDOW_BUTTONS: FooterButton[] = [
    OK_BUTTON,
    CANCEL_BUTTON,
    APPLY_BUTTON,
  ];

  return {
    testId: DATE_TIME_TEST_ID,
    taskId: DATE_TIME_PROPERTIES_TASK.id,
    width: WINDOW_WIDTH,
    position: WINDOW_POSITION,
    title: WINDOW_TITLE,
    isDraggable: true,
    actions: WINDOW_ACTIONS,
    buttons: WINDOW_BUTTONS,
  };
};
