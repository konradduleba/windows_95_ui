import { FC } from "react";

import { TabsContentContainer } from "../tabs-content-container/tabs-content-container";

import { Date, Time, TimeZone } from "./components";

import styles from "./date-and-time.module.scss";

export const DateAndTime: FC = () => {
  return (
    <TabsContentContainer className={styles.tabsContent}>
      <div className={styles.dateAndTime}>
        <Date />
        <Time />
      </div>
      <TimeZone />
    </TabsContentContainer>
  );
};
