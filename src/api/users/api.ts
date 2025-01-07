import { client } from "@api/client";

import { CreateUserResponse, type CreateUserPayload } from "@customTypes/user";

import { USERS_API_PATHS } from "./api-paths";

export const createUser = async (
  payload: CreateUserPayload
): Promise<CreateUserResponse> => {
  return client.post(USERS_API_PATHS.CREATE_USER, payload);
};
