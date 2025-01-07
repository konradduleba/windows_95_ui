import { FC, PropsWithChildren, useLayoutEffect } from "react";

import { useScreenProperties } from "@providers/screen-properties-provider/hooks";

import { SCREEN_CONTAINER_TEST_ID } from "@layouts/main-wrapper/constants";

import styles from "./screen.module.scss";

export const Screen: FC<PropsWithChildren> = ({ children }) => {
  const { screenRef, setScreenProperties } = useScreenProperties();

  useLayoutEffect(() => {
    if (screenRef.current) {
      const divRect = screenRef.current.getBoundingClientRect();
      setScreenProperties(divRect);
    }
  }, [setScreenProperties, screenRef]);

  return (
    <div
      ref={screenRef}
      className={styles.screen}
      data-testid={SCREEN_CONTAINER_TEST_ID}
    >
      {children}
    </div>
  );
};
