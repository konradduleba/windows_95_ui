import { ReactNode } from "react";

export type FormTextInputProps = {
  testId: string;
  name: string;
  label?: ReactNode;
  isPassword?: boolean;
  autocompleteId?: string;
};
