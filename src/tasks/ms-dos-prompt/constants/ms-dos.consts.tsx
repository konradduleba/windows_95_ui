import { v4 as uuidv4 } from "uuid";

import { Task } from "@providers/task-manager-provider/types";
import { UserRole } from "@providers/user-session-provider/types";

import { MsDOSPrompt } from "../ms-dos-prompt";

export const MS_DOS_TASK: Task = {
  id: uuidv4(),
  content: <MsDOSPrompt />,
  access: [UserRole.ADMIN, UserRole.USER],
};
