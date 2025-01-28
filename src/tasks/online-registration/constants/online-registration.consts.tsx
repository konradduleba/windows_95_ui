import { v4 as uuidv4 } from "uuid";

import { Task } from "@providers/task-manager-provider/types";
import { UserRole } from "@providers/user-session-provider/types";

import { OnlineRegistration } from "../online-registration";

export const ONLINE_REGISTRATION_TASK: Task = {
  id: uuidv4(),
  content: <OnlineRegistration />,
  access: [UserRole.ADMIN, UserRole.USER],
};
