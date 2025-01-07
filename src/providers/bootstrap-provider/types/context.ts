import { AuthMe } from "@providers/auth-provider/types";

import { DateTime } from "@providers/date-time-provider/types";

export type BootstrapContextProps = {
  dateTime: DateTime;
  timeDate: DateTime;
  userAuth?: AuthMe;
};
