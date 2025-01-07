import { FC, PropsWithChildren, ReactNode } from "react";

import styles from "./content-box.module.scss";

export type ContentBoxProps = {
  title: ReactNode;
};

export const ContentBox: FC<PropsWithChildren<ContentBoxProps>> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.contentBox}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
