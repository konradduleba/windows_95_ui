import { client } from "@api/client";

import { LoginPayload } from "@providers/auth-provider/types";

import { Session } from "@providers/auth-provider/types/auth";
import { User } from "@providers/user-session-provider/types";

import { AUTH_API_PATHS } from "./api-paths";

export const getAuthMe = async (): Promise<User> => {
  return client.get(AUTH_API_PATHS.ME);
};

export const loginUser = async (payload: LoginPayload): Promise<Session> => {
  return client.post(AUTH_API_PATHS.LOGIN, payload);
};
