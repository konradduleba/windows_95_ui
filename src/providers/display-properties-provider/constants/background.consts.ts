import { Background, Pattern, WallpaperWithDisplay } from "../types";

import {
  PATTERN_MOCK,
  WALLPAPER_MOCK,
} from "@api/display-properties/background";

const PATTERN: Pattern = PATTERN_MOCK[0];

const WALLPAPER: WallpaperWithDisplay = {
  ...WALLPAPER_MOCK[0],
  display: "center",
};

export const BACKGROUND_INITIAL_VALUES: Background = {
  pattern: PATTERN,
  wallpaper: WALLPAPER,
};
