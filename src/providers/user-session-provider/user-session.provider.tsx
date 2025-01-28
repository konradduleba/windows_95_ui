import { FC, PropsWithChildren } from "react";

import { useAuthMe } from "@api/auth/query";

import { WindowsLogo } from "@components/windows-logo/windows-logo";

import type { UserSessionContextProps } from "./types";

import { UserSessionContext } from "./user-session.context";

export const UserSessionProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data, isLoading } = useAuthMe();

  if (isLoading) {
    return <WindowsLogo />;
  }

  const properties: UserSessionContextProps = {
    userSession: data,
  };

  return (
    <UserSessionContext.Provider value={properties}>
      {children}
    </UserSessionContext.Provider>
  );
};
