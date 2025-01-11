import { useState } from "react";

import { ProgressIndicator, Providers } from "../types";

import { PROGRESS_INDICATORS_FALLBACK } from "../constants";

import { getProgressPercent } from "../helpers";

export const useLoadingState = () => {
  const [progressIndicator, setProgressIndicator] = useState<ProgressIndicator>(
    PROGRESS_INDICATORS_FALLBACK
  );

  const progress = getProgressPercent(progressIndicator);

  const onUpdateProgress = (indicator: Providers) => {
    setProgressIndicator((prevState) => {
      return {
        ...prevState,
        [indicator]: true,
      };
    });
  };

  return {
    progress,
    onUpdateProgress,
  };
};
