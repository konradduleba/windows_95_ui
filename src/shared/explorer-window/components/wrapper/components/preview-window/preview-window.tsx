import { CSSProperties, FC } from "react";

import { useExplorerWindow } from "shared/explorer-window/providers";
import { getWindowDimensions } from "shared/explorer-window/providers/explorer-window-provider/helpers";

import styles from "./preview-window.module.scss";

export const PreviewWindow: FC = () => {
  const { explorerRef, position } = useExplorerWindow();

  const { height, width } = getWindowDimensions(explorerRef);

  const properties: CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    top: position.y,
    left: position.x,
  };

  return <div className={styles.preview} style={properties}></div>;
};
