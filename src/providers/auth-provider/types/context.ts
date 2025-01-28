import { Session } from "./auth";

export type AuthContextProps = {
  user: Pick<Session, "role" | "userId" | "username">;
};
