import { useQuery } from "@tanstack/react-query";

import { BACKGROUND_QUERY_KEYS } from "./query-keys";

import { getBackgroundPatterns, getBackgroundWallpapers } from "./api";

export const useGetBackgroundPatternsQuery = () => {
  return useQuery({
    queryKey: [BACKGROUND_QUERY_KEYS.PATTERNS],
    queryFn: getBackgroundPatterns,
  });
};

export const useGetBackgroundWallpapersQuery = () => {
  return useQuery({
    queryKey: [BACKGROUND_QUERY_KEYS.WALLPAPERS],
    queryFn: getBackgroundWallpapers,
  });
};
