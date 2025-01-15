import { useQuery } from "@tanstack/react-query";

import { DateTime } from "@providers/date-time-provider/types";

import { UseQueryProps } from "../types";

import { DATE_TIME_QUERY_KEYS } from "./query-keys";

import { getDateTime } from "./api";

import { getQueryFn } from "../helpers";

export const useGetDateTimeQuery = ({ onSettled }: UseQueryProps<DateTime>) => {
  return useQuery({
    queryKey: [DATE_TIME_QUERY_KEYS.DATE_TIME],
    queryFn: async () =>
      getQueryFn({
        fn: getDateTime,
        onSettled,
      }),
  });
};
