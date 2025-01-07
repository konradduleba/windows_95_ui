import {
  Pattern,
  Wallpaper,
} from "@providers/display-properties-provider/types";

import { PATTERN_MOCK, WALLPAPER_MOCK } from "./mocks";

export const getBackgroundPatterns = async (): Promise<Pattern[]> => {
  return await new Promise((resolve) =>
    setTimeout(resolve, 1_000, PATTERN_MOCK)
  );
};

export const getBackgroundWallpapers = async (): Promise<Wallpaper[]> => {
  return await new Promise((resolve) =>
    setTimeout(resolve, 1_000, WALLPAPER_MOCK)
  );
};
