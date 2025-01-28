import { v4 as uuidv4 } from "uuid";

import { Task } from "@providers/task-manager-provider/types";
import { UserRole } from "@providers/user-session-provider/types";

import { Notepad } from "../notepad";

export const NOTEPAD_TASK: Task = {
  id: uuidv4(),
  content: <Notepad />,
  access: [UserRole.ADMIN, UserRole.USER],
};
