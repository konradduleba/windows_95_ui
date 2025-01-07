import { FC, PropsWithChildren } from "react";

import { Monitor, Notch, Screen } from "./components";

import { MAIN_WRAPPER_TEST_ID } from "./constants";

import styles from "./main-wrapper.module.scss";

export const MainWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper} data-testid={MAIN_WRAPPER_TEST_ID}>
      <Monitor>
        <Screen>
          <Notch />
          {children}
        </Screen>
      </Monitor>
    </div>
  );
};
