import { FC, PropsWithChildren } from "react";

import { useUserSession } from "@providers/user-session-provider/hooks";

import { AuthContextProps } from "./types";

import { UnauthenticatedView } from "./components";

import { AuthContext } from "./auth.context";

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { userSession } = useUserSession();

  if (!userSession) {
    return <UnauthenticatedView />;
  }

  const properties: AuthContextProps = {
    user: userSession,
  };

  return (
    <AuthContext.Provider value={properties}>{children}</AuthContext.Provider>
  );
};
