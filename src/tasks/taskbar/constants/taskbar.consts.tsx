import { v4 as uuidv4 } from "uuid";

import { Task } from "@providers/task-manager-provider/types";
import { UserRole } from "@providers/auth-provider/types";

import { Taskbar } from "../taskbar";

export const TASKBAR_TASK: Task = {
  id: uuidv4(),
  content: <Taskbar />,
  access: [UserRole.ADMIN, UserRole.USER],
};
