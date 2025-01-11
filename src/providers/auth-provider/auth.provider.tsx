import { FC, PropsWithChildren } from "react";

import { useBootstrap } from "@providers/bootstrap-provider/hooks";

import { AuthContextProps } from "./types";

import { UnauthorizedView } from "./components";

import { AuthContext } from "./auth.context";

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { userAuth } = useBootstrap();

  console.log({ userAuth });

  if (!userAuth) {
    return <UnauthorizedView />;
  }

  const properties: AuthContextProps = {
    userAuth,
  };

  return (
    <AuthContext.Provider value={properties}>{children}</AuthContext.Provider>
  );
};
