import { FC, PropsWithChildren } from "react";

import { useBootstrap } from "@providers/bootstrap-provider/hooks";

import { DateTimeContext } from "./date-time.context";

import { DateTimeContextProps } from "./types";

import { getDateTime } from "./helpers";

export const DateTimeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { dateTime } = useBootstrap();

  const properties: DateTimeContextProps = getDateTime(dateTime);

  return (
    <DateTimeContext.Provider value={properties}>
      {children}
    </DateTimeContext.Provider>
  );
};
