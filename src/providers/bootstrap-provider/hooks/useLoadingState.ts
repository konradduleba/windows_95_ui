import { useEffect, useState } from "react";

import { ProgressIndicator, Providers } from "../types";

import { PROGRESS_INDICATORS_FALLBACK } from "../constants";

import { getProgressPercent } from "../helpers";

export const useLoadingState = () => {
  const [showWindowsLogo, setShowWindowsLogo] = useState(true);
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

  useEffect(() => {
    if (progress === 100) {
      const timerId = setTimeout(() => {
        setShowWindowsLogo(false);
      }, 2_000);

      return () => clearTimeout(timerId);
    }
  }, [progress]);

  return {
    progress,
    progressIndicator,
    onUpdateProgress,
    showWindowsLogo,
  };
};
