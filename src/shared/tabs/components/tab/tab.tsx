import { FC } from "react";
import cn from "classnames";

import { Button } from "@shared/buttons";
import { VisibleTab } from "@shared/tabs/types";
import { SELECTED_TAB_TEST_ID } from "@shared/tabs/constants";

import styles from "./tab.module.scss";

export const Tab: FC<VisibleTab> = ({ isSelected, onClick, title, testId }) => {
  let newTestId = testId;

  if (isSelected) {
    newTestId += ` ${SELECTED_TAB_TEST_ID}`;
  }

  return (
    <Button
      className={cn(styles.tabButton, {
        [styles.selected]: isSelected,
      })}
      onClick={onClick}
      category="default"
      testId={newTestId}
    >
      {title}
    </Button>
  );
};
