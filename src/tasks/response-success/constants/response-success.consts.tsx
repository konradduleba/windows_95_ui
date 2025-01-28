import { v4 as uuidv4 } from "uuid";

import { UserRole } from "@providers/user-session-provider/types";

import { FooterAlign } from "@shared/explorer-window/providers/explorer-window-provider/types";

export const WINDOW_POSITION_Y: number = 150;

export const RESPONSE_SUCCESS_ACCESS: UserRole[] = [];

export const WINDOW_WIDTH = 400;

export const RESPONSE_SUCCESS_TASK_ID = uuidv4();

export const RESPONSE_SUCCESS_TEST_ID = "response-success";

export const FOOTER_ALIGN: FooterAlign = "center";
