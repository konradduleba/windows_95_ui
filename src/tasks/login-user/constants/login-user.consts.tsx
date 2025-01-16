import { v4 as uuidv4 } from "uuid";

import { Task } from "@providers/task-manager-provider/types";

import { LoginUser } from "../login-user";

export const LOGIN_USER_TASK: Task = {
  id: uuidv4(),
  content: <LoginUser />,
  access: [],
};

export const WINDOW_POSITION_Y: number = 200;

export const WINDOW_WIDTH = 500;

export const LOGIN_USER_TEST_ID = "login-user";

export const LOGIN_USER_REGISTER_TEST_ID = "login-user-register";
