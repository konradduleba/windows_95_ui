import { ProgressIndicator, Providers } from "../types";

export const PROGRESS_INDICATORS_FALLBACK: ProgressIndicator = {
  [Providers.DATE_TIME]: false,
  [Providers.TIME_DATE]: false,
  [Providers.AUTH]: false,
};
