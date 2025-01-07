import { FC } from "react";

import { Trans } from "@lingui/react";

import { MESSAGES } from "./translations";

import { TextInfo } from "../text-info/text-info";

export const Title: FC = () => {
  return (
    <TextInfo>
      <Trans id={MESSAGES.TITLE.id} />
    </TextInfo>
  );
};
