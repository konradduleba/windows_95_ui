import { FC, PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./sub-apps.module.scss";

type SubAppsProps = {
  smallSize?: boolean;
};

export const SubApps: FC<PropsWithChildren<SubAppsProps>> = ({
  children,
  smallSize,
}) => {
  return (
    <ul className={cn(styles.subApps, { [styles.smallSize]: smallSize })}>
      {children}
    </ul>
  );
};
