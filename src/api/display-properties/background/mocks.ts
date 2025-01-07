import { v4 as uuidv4 } from "uuid";
import {
  Pattern,
  Wallpaper,
} from "@providers/display-properties-provider/types";

export const PATTERN_MOCK: Pattern[] = [
  {
    id: uuidv4(),
    name: "none",
  },
  {
    id: uuidv4(),
    name: "Bricks",
  },
  {
    id: uuidv4(),
    name: "Buttons",
  },
  {
    id: uuidv4(),
    name: "Cargo Net",
  },
  {
    id: uuidv4(),
    name: "Circuits",
  },
];

export const WALLPAPER_MOCK: Wallpaper[] = [
  {
    id: uuidv4(),
    name: "none",
  },
  {
    id: uuidv4(),
    name: "Black Thatch",
  },
  {
    id: uuidv4(),
    name: "Blue Rivets",
  },
  {
    id: uuidv4(),
    name: "Bubbles",
  },
  {
    id: uuidv4(),
    name: "Carved Stone",
  },
];
