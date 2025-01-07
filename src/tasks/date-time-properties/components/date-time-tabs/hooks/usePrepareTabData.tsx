import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Trans } from "@lingui/react";

import { Tab, TabsProps } from "@shared/tabs/types";
import { TypographyText } from "@shared/typography";

import { DateAndTime, TimeZone } from "../components";

import { MESSAGES } from "../translations";

import {
  DATE_TIME_TAB_TEST_ID,
  TABS_CONTAINER_TEST_ID,
  TIME_ZONE_TAB_TEST_ID,
} from "@tasks/date-time-properties/constants";

const DATE_TIME_ID = uuidv4();
const TIME_ZONE_ID = uuidv4();

export const usePrepareTabData = (): TabsProps => {
  const [currentTab, setCurrentTab] = useState<string>(DATE_TIME_ID);

  const DATE_AND_TIME: Tab = {
    id: DATE_TIME_ID,
    testId: DATE_TIME_TAB_TEST_ID,
    title: (
      <TypographyText size="sm">
        <Trans id={MESSAGES.DATE_AND_TIME.id} />
      </TypographyText>
    ),
    content: <DateAndTime />,
  };

  const TIME_ZONE: Tab = {
    id: TIME_ZONE_ID,
    testId: TIME_ZONE_TAB_TEST_ID,
    title: (
      <TypographyText size="sm">
        <Trans id={MESSAGES.TIME_ZONE.id} />
      </TypographyText>
    ),
    content: <TimeZone />,
  };

  const tabList: Tab[] = [DATE_AND_TIME, TIME_ZONE];

  return {
    onChangeTab: setCurrentTab,
    selectedTabId: currentTab,
    list: tabList,
    testId: TABS_CONTAINER_TEST_ID,
  };
};
