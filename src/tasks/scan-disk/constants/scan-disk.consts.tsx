import { v4 as uuidv4 } from "uuid";

import { Task } from "@providers/task-manager-provider/types";
import { UserRole } from "@providers/user-session-provider/types";

import { ScanDisk } from "../scan-disk";

export const SCAN_DISK_TASK: Task = {
  id: uuidv4(),
  content: <ScanDisk />,
  access: [UserRole.ADMIN, UserRole.USER],
};
