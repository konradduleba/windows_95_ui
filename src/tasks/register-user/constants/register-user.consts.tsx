import { Task } from "@providers/task-manager-provider/types";
import { v4 as uuidv4 } from "uuid";
import { RegisterUser } from "../register-user";

export const REGISTER_USER_TASK: Task = {
  id: uuidv4(),
  content: <RegisterUser />,
  access: [],
};

export const WINDOW_POSITION_Y: number = 200;

export const WINDOW_WIDTH = 540;

export const REGISTER_USER_TEST_ID = "register-user";

export const REGISTER_USER_LOGIN_TEST_ID = "register-user-login";

export const REGISTER_USER_SUCCESS_LOGIN_BUTTON_TEST_ID =
  "register-user-success-login-button";
