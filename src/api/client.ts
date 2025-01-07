import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

import {
  attachTokenToRequest,
  extractDataFromResponse,
  handleError,
} from "./interceptors";

const AXIOS_CONFIG: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

export const client: AxiosInstance = axios.create(AXIOS_CONFIG);

client.interceptors.request.use(attachTokenToRequest, handleError);

client.interceptors.response.use(extractDataFromResponse, handleError);
