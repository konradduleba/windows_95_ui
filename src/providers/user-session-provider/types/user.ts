export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type User = {
  userId: string;
  username: string;
  role: UserRole;
};
