import { useContext } from "react";

import { StartAppContext } from "../start-app.context";

export const useStartApp = () => {
  const context = useContext(StartAppContext);

  if (!context) {
    throw new Error("useStartApp must be used within a StartAppContext");
  }

  return context;
};
