import { createContext } from "react";

import { Background, OnUpdateDisplayProperties } from "./types";

import { DISPLAY_PROPERTIES_INITIAL_VALUES } from "./constants";

export interface DisplayPropertiesContextProps {
  background: Background;
  onUpdateDisplayProperties: OnUpdateDisplayProperties;
}

export const DisplayPropertiesContext =
  createContext<DisplayPropertiesContextProps>(
    DISPLAY_PROPERTIES_INITIAL_VALUES
  );
