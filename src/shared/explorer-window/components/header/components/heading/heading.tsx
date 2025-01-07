import { FC } from "react";

import { TypographyHeading } from "@shared/typography";
import { useExplorerWindow } from "shared/explorer-window/providers";
import { EXPLORER_WINDOW_HEADING_TEST_ID } from "@shared/explorer-window/providers/explorer-window-provider/constants";

import styles from "./heading.module.scss";

export const Heading: FC = () => {
  const { icon, title } = useExplorerWindow();
  const { isDraggable, onStartDraggingWindow } = useExplorerWindow();

  const onMouseDown = isDraggable ? onStartDraggingWindow : undefined;

  return (
    <div
      className={styles.heading}
      onMouseDown={onMouseDown}
      data-testid={EXPLORER_WINDOW_HEADING_TEST_ID}
    >
      {icon}
      <TypographyHeading size="sm" colorOption="alt">
        {title}
      </TypographyHeading>
    </div>
  );
};
