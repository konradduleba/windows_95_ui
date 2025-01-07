export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type AuthMe = {
  userId: string;
  username: string;
  role: UserRole;
};

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
