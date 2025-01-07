import {
  useGetDateTimeQuery,
  useGetDateTimeQueryTest,
} from "@api/date-time/query";

import { useAuthMe } from "@api/auth/query";

import { Providers } from "../types";

type UseMultipleQueriesProps = {
  onUpdateProgress: (indicator: Providers) => void;
};

export const useMultipleQueries = ({
  onUpdateProgress,
}: UseMultipleQueriesProps) => {
  const dateTime = useGetDateTimeQuery({
    onSettled: () => onUpdateProgress(Providers.DATE_TIME),
  });

  const timeDate = useGetDateTimeQueryTest({
    onSettled: () => onUpdateProgress(Providers.TIME_DATE),
  });

  const userAuth = useAuthMe({
    onSettled: () => onUpdateProgress(Providers.AUTH),
  });

  return {
    dateTime: dateTime.data,
    timeDate: timeDate.data,
    userAuth: userAuth.data,
  };
};
