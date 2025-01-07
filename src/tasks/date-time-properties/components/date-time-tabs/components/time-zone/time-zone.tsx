import { FC } from "react";

import { TabsContentContainer } from "../tabs-content-container/tabs-content-container";

import { AdjustClock, Map, TimeZonePicker } from "./components";

import styles from "./time-zone.module.scss";

export const TimeZone: FC = () => {
  return (
    <TabsContentContainer className={styles.timeZone}>
      <TimeZonePicker />
      <Map />
      <AdjustClock />
    </TabsContentContainer>
  );
};
