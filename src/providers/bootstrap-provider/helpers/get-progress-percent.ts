import { ProgressIndicator } from "../types";

export const getProgressPercent = (
  progressIndicator: ProgressIndicator
): number => {
  const totalProcesses = Object.keys(progressIndicator).length;
  const finishedProcesses = Object.values(progressIndicator).filter(
    (value) => value
  ).length;

  const percentage = (finishedProcesses / totalProcesses) * 100;

  return parseFloat(percentage.toFixed(2));
};
