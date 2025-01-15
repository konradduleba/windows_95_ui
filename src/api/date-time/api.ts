import { DateTime } from "@providers/date-time-provider/types";

import { DATE_TIME_MOCK } from "./mocks";

export const getDateTime = async (): Promise<DateTime> => {
  return await new Promise((resolve) =>
    setTimeout(resolve, 1_000, DATE_TIME_MOCK)
  );
};
