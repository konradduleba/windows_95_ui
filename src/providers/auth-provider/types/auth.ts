import { UserRole } from "@providers/user-session-provider/types/user";

export type LoginPayload = {
  username: string;
  password: string;
};

export type Session = {
  accessToken: string;
  userId: string;
  username: string;
  role: UserRole;
};
