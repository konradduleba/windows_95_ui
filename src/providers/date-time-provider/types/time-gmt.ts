import { ReactNode } from "react";

export enum TimeGMT {
  _GMT12 = "GMT-12:00",
  _GMT11 = "GMT-11:00",
  _GMT10 = "GMT-10:00",
  _GMT9 = "GMT-09:00",
  _GMT8 = "GMT-08:00",
  _GMT7 = "GMT-07:00",
  _GMT6 = "GMT-06:00",
  _GMT5 = "GMT-05:00",
  _GMT4 = "GMT-04:00",
  _GMT3_30 = "GMT-03:30",
  _GMT3 = "GMT-03:00",
  _GMT2 = "GMT-02:00",
  _GMT1 = "GMT-01:00",
  GMT = "GMT",
  GMT1 = "GMT+01:00",
  GMT2 = "GMT+02:00",
  GMT3 = "GMT+03:00",
  GMT3_30 = "GMT+03:30",
  GMT4 = "GMT+04:00",
  GMT4_30 = "GMT+04:30",
  GMT5 = "GMT+05:00",
  GMT5_30 = "GMT+05:30",
  GMT6 = "GMT+06:00",
  GMT7 = "GMT+07:00",
  GMT8 = "GMT+08:00",
  GMT9 = "GMT+09:00",
  GMT9_30 = "GMT+09:30",
  GMT10 = "GMT+10:00",
  GMT11 = "GMT+11:00",
  GMT12 = "GMT+12:00",
}

export type TimeZoneID = string;

export type TimeZone = {
  id: TimeZoneID;
  image: string;
  name: ReactNode;
};
