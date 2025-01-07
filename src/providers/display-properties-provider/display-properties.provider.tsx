import { FC, PropsWithChildren, useState } from "react";

import {
  DisplayPropertiesContext,
  DisplayPropertiesContextProps,
} from "./display-properties.context";

import { DISPLAY_PROPERTIES_INITIAL_VALUES } from "./constants";

export const DisplayPropertiesProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [displayProperties] = useState<DisplayPropertiesContextProps>(
    DISPLAY_PROPERTIES_INITIAL_VALUES
  );

  const onUpdateDisplayProperties = () => {
    console.log("displayProperties", displayProperties);
  };

  const properties: DisplayPropertiesContextProps = {
    ...displayProperties,
    onUpdateDisplayProperties,
  };

  return (
    <DisplayPropertiesContext.Provider value={properties}>
      {children}
    </DisplayPropertiesContext.Provider>
  );
};
