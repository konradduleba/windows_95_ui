import { useContext } from "react";

import { UserSessionContext } from "../user-session.context";

export const useUserSession = () => {
  const context = useContext(UserSessionContext);

  if (!context) {
    throw new Error("useUserSession must be used within a UserSessionContext");
  }

  return context;
};
