import { FC } from "react";
import { Trans } from "@lingui/react";

import { ProgressIndicator } from "@providers/bootstrap-provider/types";

import { MESSAGES } from "./translations";

import { TextInfo } from "../text-info/text-info";

import styles from "./fetch-list.module.scss";

type FetchListProps = {
  list: ProgressIndicator;
};

export const FetchList: FC<FetchListProps> = ({ list }) => {
  return (
    <ul className={styles.container}>
      {Object.entries(list).map(([provider, status]) => (
        <li key={provider} className={styles.item}>
          <TextInfo>
            <Trans id={MESSAGES[provider].id} />
          </TextInfo>
          <TextInfo>
            <Trans id={status ? MESSAGES.DONE.id : MESSAGES.FETCHING.id} />
          </TextInfo>
        </li>
      ))}
    </ul>
  );
};
