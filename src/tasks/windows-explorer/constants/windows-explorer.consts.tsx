import { v4 as uuidv4 } from "uuid";

import { Task } from "@providers/task-manager-provider/types";
import { UserRole } from "@providers/auth-provider/types";

import { WindowsExplorer } from "../windows-explorer";

export const WINDOWS_EXPLORER_TASK: Task = {
  id: uuidv4(),
  content: <WindowsExplorer />,
  access: [UserRole.ADMIN, UserRole.USER],
};
