export type CreateUserPayload = {
  email: string;
  username: string;
  password: string;
};

export type CreateUserResponse = {
  statusCode: 201;
  message: string;
};
