import { v4 as uuidv4 } from "uuid";

import { Task } from "@providers/task-manager-provider/types";
import { UserRole } from "@providers/user-session-provider/types";

import { Help } from "../help";

export const HELP_TASK: Task = {
  id: uuidv4(),
  content: <Help />,
  access: [UserRole.ADMIN, UserRole.USER],
};
