import { v4 as uuidv4 } from "uuid";

import { Task } from "@providers/task-manager-provider/types";
import { UserRole } from "@providers/user-session-provider/types";

import { ControlPanel } from "../control-panel";

export const CONTROL_PANEL_TASK: Task = {
  id: uuidv4(),
  content: <ControlPanel />,
  access: [UserRole.ADMIN, UserRole.USER],
};
