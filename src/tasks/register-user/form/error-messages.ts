import { defineMessage } from "@lingui/macro";

export const ERROR_MESSAGES = {
  USERNAME: {
    MIN: defineMessage({
      id: "REGISTER_USER.ERROR_MESSAGES.USERNAME.MIN",
    }),
    REQUIRED: defineMessage({
      id: "REGISTER_USER.ERROR_MESSAGES.USERNAME.REQUIRED",
    }),
  },
  PASSWORD: {
    MIN: defineMessage({
      id: "REGISTER_USER.ERROR_MESSAGES.PASSWORD.MIN",
    }),
    MIN_LOWERCASE: defineMessage({
      id: "REGISTER_USER.ERROR_MESSAGES.PASSWORD.MIN_LOWERCASE",
    }),
    MIN_UPPERCASE: defineMessage({
      id: "REGISTER_USER.ERROR_MESSAGES.PASSWORD.MIN_UPPERCASE",
    }),
    MIN_SYMBOLS: defineMessage({
      id: "REGISTER_USER.ERROR_MESSAGES.PASSWORD.MIN_SYMBOLS",
    }),
    MIN_NUMBERS: defineMessage({
      id: "REGISTER_USER.ERROR_MESSAGES.PASSWORD.MIN_NUMBERS",
    }),
    REQUIRED: defineMessage({
      id: "REGISTER_USER.ERROR_MESSAGES.PASSWORD.REQUIRED",
    }),
  },
  EMAIL: {
    MATCH: defineMessage({
      id: "REGISTER_USER.ERROR_MESSAGES.EMAIL.MATCH",
    }),
    REQUIRED: defineMessage({
      id: "REGISTER_USER.ERROR_MESSAGES.EMAIL.REQUIRED",
    }),
  },
  CONFIRM_PASSWORD: {
    MATCH: defineMessage({
      id: "REGISTER_USER.ERROR_MESSAGES.CONFIRM_PASSWORD.MATCH",
    }),
    REQUIRED: defineMessage({
      id: "REGISTER_USER.ERROR_MESSAGES.CONFIRM_PASSWORD.REQUIRED",
    }),
  },
};
