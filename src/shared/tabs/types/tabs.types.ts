import { ReactNode } from "react";

export type Tab = {
  id: string;
  testId: string;
  title: ReactNode;
  content: ReactNode;
};

export type TabsProps = {
  testId: string;
  selectedTabId: string;
  onChangeTab: (tabId: string) => void;
  list: Tab[];
};

export type VisibleTab = {
  id: string;
  testId: string;
  title: ReactNode;
  isSelected: boolean;
  onClick: () => void;
};
