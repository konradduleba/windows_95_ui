import { useUserSession } from "@providers/user-session-provider/hooks";
import { UserRole } from "@providers/user-session-provider/types";

export const useCheckTaskAccess = () => {
  const { userSession } = useUserSession();

  const checkTaskAccess = (accessRoles: UserRole[]) => {
    if (!accessRoles.length) {
      return true;
    }

    return accessRoles.some(
      (userRole: UserRole) => userRole === userSession?.role
    );
  };

  return {
    checkTaskAccess,
  };
};
