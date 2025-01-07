import { useContext } from "react";

import { BootstrapContext } from "../bootstrap.context";

export const useBootstrap = () => {
  const context = useContext(BootstrapContext);

  if (!context) {
    throw new Error("useBootstrap must be used within a BootstrapContext");
  }

  return context;
};
