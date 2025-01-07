import { FC, PropsWithChildren } from "react";

import { useHandleStartAppList } from "./hooks";

import { StartAppContext } from "./start-app.context";

export const StartAppProvider: FC<PropsWithChildren> = ({ children }) => {
  const properties = useHandleStartAppList();

  return (
    <StartAppContext.Provider value={properties}>
      {children}
    </StartAppContext.Provider>
  );
};
