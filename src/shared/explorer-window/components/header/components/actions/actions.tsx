import { FC, Fragment } from "react";

import { useExplorerWindow } from "shared/explorer-window/providers";

import styles from "./actions.module.scss";

export const Actions: FC = () => {
  const { actions } = useExplorerWindow();

  if (!actions.length) {
    return null;
  }

  return (
    <div className={styles.actions}>
      {actions.map(({ id, content }) => (
        <Fragment key={id}>{content}</Fragment>
      ))}
    </div>
  );
};
