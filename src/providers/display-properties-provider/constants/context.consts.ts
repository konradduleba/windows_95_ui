import { DisplayPropertiesContextProps } from "../display-properties.context";

import { BACKGROUND_INITIAL_VALUES } from "./background.consts";

export const DISPLAY_PROPERTIES_INITIAL_VALUES: DisplayPropertiesContextProps =
  {
    background: BACKGROUND_INITIAL_VALUES,
    onUpdateDisplayProperties: () => {},
  };
