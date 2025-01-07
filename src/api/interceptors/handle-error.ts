import { GenericResponseError } from "@api/types";
import { AxiosError } from "axios";

export const handleError = (error: AxiosError) => {
  return Promise.reject<GenericResponseError>(error?.response?.data);
};
