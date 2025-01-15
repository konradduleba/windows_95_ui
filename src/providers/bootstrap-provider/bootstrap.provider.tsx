import { FC, PropsWithChildren } from "react";

import { DateTimeProvider } from "@providers/date-time-provider/date-time.provider";

import { WindowsLogo } from "@components/windows-logo/windows-logo";

import { BootstrapContext } from "./bootstrap.context";

import { useLoadingState, useMultipleQueries } from "./hooks";

import { BootstrapContextProps } from "./types";

export const BoostrapProvider: FC<PropsWithChildren> = ({ children }) => {
  const { progress, onUpdateProgress } = useLoadingState();
  const { dateTime } = useMultipleQueries({
    onUpdateProgress,
  });

  if (progress !== 100) {
    return <WindowsLogo />;
  }

  if (!dateTime) {
    return null;
  }

  const properties: BootstrapContextProps = {
    dateTime,
  };

  return (
    <BootstrapContext.Provider value={properties}>
      <DateTimeProvider>{children}</DateTimeProvider>
    </BootstrapContext.Provider>
  );
};
