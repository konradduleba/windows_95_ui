import { defineMessage } from "@lingui/macro";

import { Providers } from "@providers/bootstrap-provider/types";

type MessageProps = {
  id: string;
};

type MessagesType = Record<string, MessageProps>;

export const MESSAGES: MessagesType = {
  [Providers.DATE_TIME]: defineMessage({
    id: "PROVIDERS.BOOTSTRAP_SCREEN.FETCH.DATE_TIME",
  }),
  [Providers.TIME_DATE]: defineMessage({
    id: "PROVIDERS.BOOTSTRAP_SCREEN.FETCH.TIME_DATE",
  }),
  [Providers.AUTH]: defineMessage({
    id: "PROVIDERS.BOOTSTRAP_SCREEN.FETCH.AUTH",
  }),
  FETCHING: defineMessage({
    id: "PROVIDERS.BOOTSTRAP_SCREEN.FETCH.FETCHING",
  }),
  DONE: defineMessage({
    id: "PROVIDERS.BOOTSTRAP_SCREEN.FETCH.DONE",
  }),
};
