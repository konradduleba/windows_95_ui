import { InternalAxiosRequestConfig } from "axios";

export const STORAGE_KEY_NAME = "accessToken";

export const attachTokenToRequest = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};
