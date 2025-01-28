import type { GenericResponseError } from "@api/types";
import { ReactNode } from "react";

export enum ResponseErrorTypes {
  CUSTOM = "custom",
  GENERIC = "generic",
}

export type BasicResponseError = {
  type: ResponseErrorTypes.GENERIC;
} & GenericResponseError;

export type CustomResponseError = {
  type: ResponseErrorTypes.CUSTOM;
  id: string;
  message: ReactNode;
  title: ReactNode;
};

export type ResponseErrorProps = BasicResponseError | CustomResponseError;
