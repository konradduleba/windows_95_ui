export enum Providers {
  DATE_TIME = "DATE_TIME",
  TIME_DATE = "TIME_DATE",
  AUTH = "AUTH",
}

export type ProgressIndicator = Record<Providers, boolean>;
