import { useCreateUser } from "@api/users/query";
import type { GenericResponseError } from "@api/types";

import { CreateUserPayload } from "@customTypes/user";

import { RegisterUserFormValues } from "../form";

import { useShowSuccessToast } from "./useShowSuccessToast";
import { useShowErrorToast } from "./useShowErrorToast";

export const useHandleRegisterSubmit = () => {
  const { mutateAsync: createUser } = useCreateUser();
  const { showSuccessToast } = useShowSuccessToast();
  const { showErrorToast } = useShowErrorToast();

  const onSubmit = async ({
    email,
    password,
    username,
  }: RegisterUserFormValues) => {
    const payload: CreateUserPayload = {
      email,
      password,
      username,
    };

    try {
      await createUser(payload);
      showSuccessToast();
    } catch (error) {
      showErrorToast(error as GenericResponseError);
    }
  };

  return {
    onSubmit,
  };
};
