import { FC } from "react";

import { Trans } from "@lingui/react";

import { MESSAGES } from "./translations";

import { TextInfo } from "../text-info/text-info";

type FetchInfoProps = {
  progress: number;
};

export const FetchInfo: FC<FetchInfoProps> = ({ progress }) => {
  return (
    <TextInfo>
      <Trans id={MESSAGES.FETCH_INFO.id} values={{ progress }} />
    </TextInfo>
  );
};
