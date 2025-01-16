import { FC, PropsWithChildren } from "react";

import { useAuthMe } from "@api/auth/query";

import { WindowsLogo } from "@components/windows-logo/windows-logo";

import { AuthContextProps } from "./types";

import { UnauthenticatedView } from "./components";

import { AuthContext } from "./auth.context";

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data, isLoading } = useAuthMe();

  if (isLoading) {
    return <WindowsLogo />;
  }

  if (!data) {
    return <UnauthenticatedView />;
  }

  const properties: AuthContextProps = {
    userAuth: data,
  };

  return (
    <AuthContext.Provider value={properties}>{children}</AuthContext.Provider>
  );
};
