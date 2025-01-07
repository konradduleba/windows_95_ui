export type Pattern = {
  id: string;
  name: string;
};

export type WallpaperDisplay = "tile" | "center";

export type Wallpaper = {
  id: string;
  name: string;
};

export type WallpaperWithDisplay = Wallpaper & {
  display: WallpaperDisplay;
};

export type Background = {
  pattern: Pattern;
  wallpaper: WallpaperWithDisplay;
};
