import { AxiosResponse } from "axios";

export const extractDataFromResponse = (response: AxiosResponse) => {
  return response.data;
};
