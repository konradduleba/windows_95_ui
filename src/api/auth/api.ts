import { client } from "@api/client";

import { AuthMe, Session, LoginPayload } from "@providers/auth-provider/types";

import { AUTH_API_PATHS } from "./api-paths";

export const getAuthMe = async (): Promise<AuthMe> => {
  return client.get(AUTH_API_PATHS.ME);
};

export const loginUser = async (payload: LoginPayload): Promise<Session> => {
  return client.post(AUTH_API_PATHS.LOGIN, payload);
};
