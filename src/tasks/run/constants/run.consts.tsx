import { v4 as uuidv4 } from "uuid";

import { Task } from "@providers/task-manager-provider/types";
import { UserRole } from "@providers/auth-provider/types";

import { Run } from "../run";

export const RUN_TASK: Task = {
  id: uuidv4(),
  content: <Run />,
  access: [UserRole.ADMIN, UserRole.USER],
};
