import { useQuery } from "@tanstack/react-query";

import { DateTime } from "@providers/date-time-provider/types";

import { UseQueryProps } from "../types";

import { DATE_TIME_QUERY_KEYS } from "./query-keys";

import { getDateTime, getDateTimeTest } from "./api";

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

export const useGetDateTimeQueryTest = ({
  onSettled,
}: UseQueryProps<DateTime>) => {
  return useQuery({
    queryKey: [DATE_TIME_QUERY_KEYS.TIME_DATE],
    queryFn: async () =>
      getQueryFn({
        fn: getDateTimeTest,
        onSettled,
      }),
  });
};
