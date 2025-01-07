import { useContext } from "react";

import { DisplayPropertiesContext } from "../display-properties.context";

export const useDisplayProperties = () => {
  const context = useContext(DisplayPropertiesContext);

  if (context === undefined) {
    throw new Error(
      "useDisplayProperties must be used within a DisplayPropertiesContext"
    );
  }

  return context;
};
