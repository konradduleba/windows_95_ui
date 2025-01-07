import { FC } from "react";

import { SHUT_DOWN_APP } from "@providers/start-app-provider/constants";

import { Item } from "../item/item";

import styles from "./shut-down.module.scss";

export const ShutDown: FC = () => {
  return (
    <>
      <div className={styles.divider} />
      <Item appProps={SHUT_DOWN_APP} />
    </>
  );
};
