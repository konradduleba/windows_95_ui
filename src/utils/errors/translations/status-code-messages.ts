import { defineMessage } from "@lingui/macro";
import { MessageDescriptor } from "@lingui/core";

export const STATUS_CODE_MESSAGES: Record<string, MessageDescriptor> = {
  code401: defineMessage({
    id: "STATUS_CODE_ERROR.UNAUTHORIZED",
  }),
  code400: defineMessage({
    id: "STATUS_CODE_ERROR.BAD_REQUEST",
  }),
  code429: defineMessage({
    id: "STATUS_CODE_ERROR.TOO_MANY_REQUEST",
  }),
};
