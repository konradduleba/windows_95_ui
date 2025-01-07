import { GenericResponseError } from "@api/types";

import "@tanstack/react-query";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: GenericResponseError;
  }
}
