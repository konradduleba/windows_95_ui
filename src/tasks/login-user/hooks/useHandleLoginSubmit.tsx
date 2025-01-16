import { useTaskManager } from "@providers/task-manager-provider/hooks";

import { useLoginUser } from "@api/auth/query";
import type { GenericResponseError } from "@api/types";

import { LoginUserFormValues } from "../form";

import { LOGIN_USER_TASK } from "../constants";

import { useShowErrorToast } from "./useShowErrorToast";

export const useHandleLoginSubmit = () => {
  const { onCloseTask } = useTaskManager();
  const { mutateAsync: loginUser } = useLoginUser();
  const { showErrorToast } = useShowErrorToast();

  const onSubmit = async (values: LoginUserFormValues) => {
    try {
      await loginUser(values);
      onCloseTask(LOGIN_USER_TASK.id);
    } catch (error) {
      showErrorToast(error as GenericResponseError);
    }
  };

  return {
    onSubmit,
  };
};
