import { useGetDateTimeQuery } from "@api/date-time/query";

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

  return {
    dateTime: dateTime.data,
  };
};
