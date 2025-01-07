import { FC } from "react";

import { TabsProps } from "./types";

import { usePrepareTabData } from "./hooks";

import { Content, Tab } from "./components";

import styles from "./tabs.module.scss";

export const Tabs: FC<TabsProps> = (props) => {
  const { currentContent, titles } = usePrepareTabData(props);
  const { testId } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs} data-testid={testId}>
        {titles.map((titleTab) => (
          <Tab key={titleTab.id} {...titleTab} />
        ))}
      </div>
      <Content>{currentContent}</Content>
    </div>
  );
};
