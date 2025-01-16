import { v4 as uuidv4 } from "uuid";

import { Task } from "@providers/task-manager-provider/types";
import { UserRole } from "@providers/auth-provider/types";

import { DocumentsReadme } from "../documents-readme";

export const DOCUMENTS_README_TASK: Task = {
  id: uuidv4(),
  content: <DocumentsReadme />,
  access: [UserRole.ADMIN, UserRole.USER],
};
