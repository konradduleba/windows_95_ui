import { TabsProps, VisibleTab } from "../types";

export const usePrepareTabData = ({
  list,
  onChangeTab,
  selectedTabId,
}: TabsProps) => {
  const titles: VisibleTab[] = list.map(({ id, title, testId }) => ({
    id,
    testId,
    title,
    isSelected: id === selectedTabId,
    onClick: () => onChangeTab(id),
  }));

  const currentContent = list.find(({ id }) => id === selectedTabId);

  return {
    titles,
    currentContent: currentContent?.content,
  };
};
