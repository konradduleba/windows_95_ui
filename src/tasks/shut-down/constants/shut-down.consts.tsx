import { v4 as uuidv4 } from "uuid";

import { Task } from "@providers/task-manager-provider/types";
import { UserRole } from "@providers/user-session-provider/types";

import { ShutDown } from "../shut-down";

export const SHUT_DOWN_TASK: Task = {
  id: uuidv4(),
  content: <ShutDown />,
  access: [UserRole.ADMIN, UserRole.USER],
};
