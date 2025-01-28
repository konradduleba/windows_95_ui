import { v4 as uuidv4 } from "uuid";

import { Task } from "@providers/task-manager-provider/types";
import { UserRole } from "@providers/user-session-provider/types";

import { FindFilesOrFolders } from "../find-files-or-folders";

export const FIND_FILES_OR_FOLDERS_TASK: Task = {
  id: uuidv4(),
  content: <FindFilesOrFolders />,
  access: [UserRole.ADMIN, UserRole.USER],
};
