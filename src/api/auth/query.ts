import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { AuthMe } from "@providers/auth-provider/types";

import { getQueryFn, updateAccessToken } from "@api/helpers";
import { UseQueryProps } from "@api/types";

import { AUTH_QUERY_KEYS } from "./query-keys";

import { getAuthMe, loginUser } from "./api";

export const useAuthMe = ({ onSettled }: UseQueryProps<AuthMe>) => {
  return useQuery({
    queryKey: [AUTH_QUERY_KEYS.ME],
    queryFn: async () =>
      getQueryFn({
        fn: getAuthMe,
        onSettled,
      }),
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
