import { FC, PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./tabs-content-container.module.scss";

type TabsContentContainerProps = {
  className?: string;
};

export const TabsContentContainer: FC<
  PropsWithChildren<TabsContentContainerProps>
> = ({ children, className }) => {
  return <div className={cn(styles.tabsContainer, className)}>{children}</div>;
};
