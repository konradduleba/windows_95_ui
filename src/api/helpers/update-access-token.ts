import { STORAGE_KEY_NAME } from "@api/interceptors/attach-token-to-request";

type UpdateAccessTokenProps = {
  accessToken: string;
};

export const updateAccessToken = ({ accessToken }: UpdateAccessTokenProps) => {
  localStorage.setItem(STORAGE_KEY_NAME, accessToken);
};
