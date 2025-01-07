export type MessageObjectError = {
  message: string;
  statusCode: number;
};

export type GenericResponseError = {
  path: string;
  statusCode: number;
  timestamp: string;
  response: string | object | MessageObjectError;
};
