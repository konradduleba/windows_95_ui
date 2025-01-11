import { FC, PropsWithChildren } from "react";

import { DateTimeProvider } from "@providers/date-time-provider/date-time.provider";

import { BootstrapContext } from "./bootstrap.context";

import { useLoadingState, useMultipleQueries } from "./hooks";

import { WindowsLogo } from "./components";

import { BootstrapContextProps } from "./types";

export const BoostrapProvider: FC<PropsWithChildren> = ({ children }) => {
  const { progress, onUpdateProgress } = useLoadingState();
  const { dateTime, timeDate, userAuth } = useMultipleQueries({
    onUpdateProgress,
  });

  if (progress !== 100) {
    return <WindowsLogo />;
  }

  if (!dateTime || !timeDate) {
    return null;
  }

  const properties: BootstrapContextProps = {
    dateTime,
    timeDate,
    userAuth,
  };

  return (
    <BootstrapContext.Provider value={properties}>
      <DateTimeProvider>{children}</DateTimeProvider>
    </BootstrapContext.Provider>
  );
};
