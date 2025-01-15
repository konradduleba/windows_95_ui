import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { updateAccessToken } from "@api/helpers";

import { AUTH_QUERY_KEYS } from "./query-keys";

import { getAuthMe, loginUser } from "./api";

export const useAuthMe = () => {
  return useQuery({
    queryKey: [AUTH_QUERY_KEYS.ME],
    queryFn: getAuthMe,
  });
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: ({ accessToken }) => {
      updateAccessToken({ accessToken });
      queryClient.invalidateQueries({ queryKey: [AUTH_QUERY_KEYS.ME] });
    },
  });
};
