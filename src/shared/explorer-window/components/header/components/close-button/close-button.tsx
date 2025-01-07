import { FC } from "react";

import { IconButton } from "@shared/buttons";
import { useExplorerWindow } from "@shared/explorer-window/providers";
import { EXPLORER_WINDOW_X_CLOSE_BUTTON_TEST_ID } from "@shared/explorer-window/providers/explorer-window-provider/constants";

import SvgClose from "@icons/close";

export const CloseButton: FC = () => {
  const { onCloseExplorer } = useExplorerWindow();

  return (
    <IconButton
      icon={<SvgClose />}
      onClick={(event) => {
        event.stopPropagation();
        onCloseExplorer();
      }}
      testId={EXPLORER_WINDOW_X_CLOSE_BUTTON_TEST_ID}
    />
  );
};
