import { FC, PropsWithChildren } from "react";

import { useExplorerWindow } from "shared/explorer-window/providers";

import { MainWindow, PreviewWindow } from "./components";

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const { isWindowDragging } = useExplorerWindow();

  return (
    <>
      <MainWindow>{children}</MainWindow>
      {isWindowDragging && <PreviewWindow />}
    </>
  );
};
