import { FC } from "react";

import { Tabs } from "@shared/tabs/tabs";

import { usePrepareTabData } from "./hooks";

export const DateTimeTabs: FC = () => {
  const tabProperties = usePrepareTabData();

  return <Tabs {...tabProperties} />;
};
