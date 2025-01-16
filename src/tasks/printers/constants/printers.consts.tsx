import { v4 as uuidv4 } from "uuid";

import { Task } from "@providers/task-manager-provider/types";
import { UserRole } from "@providers/auth-provider/types";

import { Printers } from "../printers";

export const PRINTERS_TASK: Task = {
  id: uuidv4(),
  content: <Printers />,
  access: [UserRole.ADMIN, UserRole.USER],
};
