import { ButtonHTMLAttributes } from "react";

import {
  EXPLORER_WINDOW_CANCEL_BUTTON_TEST_ID,
  EXPLORER_WINDOW_OK_BUTTON_TEST_ID,
  EXPLORER_WINDOW_SUBMIT_BUTTON_TEST_ID,
} from "@shared/explorer-window/providers/explorer-window-provider/constants";
import {
  ActionTypes,
  FooterButton,
} from "@shared/explorer-window/providers/explorer-window-provider/types";

type GetFooterButtonProps = {
  props: FooterButton;
  onCloseExplorer: () => void;
};

type FooterTestId = {
  testId: string;
};

type FooterReturnProps = FooterTestId &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type">;

export const getFooterButtonProps = ({
  onCloseExplorer,
  props,
}: GetFooterButtonProps): FooterReturnProps => {
  const { action } = props;

  if (action === ActionTypes.CUSTOM) {
    const { testId, onClick } = props;

    return {
      testId,
      onClick,
    };
  }

  if (action === ActionTypes.OK) {
    return {
      testId: EXPLORER_WINDOW_OK_BUTTON_TEST_ID,
      type: "submit",
      onClick: onCloseExplorer,
    };
  }

  if (action === ActionTypes.SUBMIT) {
    return {
      testId: EXPLORER_WINDOW_SUBMIT_BUTTON_TEST_ID,
      type: "submit",
    };
  }

  return {
    testId: EXPLORER_WINDOW_CANCEL_BUTTON_TEST_ID,
    onClick: onCloseExplorer,
  };
};
