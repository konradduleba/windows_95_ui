import { useContext } from "react";

import { ExplorerWindowContext } from "../explorer-window.context";

export const useExplorerWindow = () => {
  const context = useContext(ExplorerWindowContext);

  if (!context) {
    throw new Error(
      "useExplorerWindow must be used within a ExplorerWindowContext"
    );
  }

  return context;
};
