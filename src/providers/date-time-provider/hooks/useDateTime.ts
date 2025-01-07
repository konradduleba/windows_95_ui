import { useContext } from "react";

import { DateTimeContext } from "../date-time.context";

export const useDateTime = () => {
  const context = useContext(DateTimeContext);

  if (!context) {
    throw new Error("useDateTime must be used within a DateTimeContext");
  }

  return context;
};
