import { FC, ReactNode } from "react";

import { TypographyText } from "@shared/typography";
import { FooterButton } from "@shared/explorer-window/providers/explorer-window-provider/types";

import { SuccessIcon, TaskWindow } from "./components";

export type ResponseSuccessProps = {
  message: ReactNode;
  title: ReactNode;
  customButtons?: FooterButton[];
};

export const ResponseSuccess: FC<ResponseSuccessProps> = (successProps) => {
  const { message, title, customButtons } = successProps;

  return (
    <TaskWindow title={title} customButtons={customButtons}>
      <SuccessIcon />
      <TypographyText size="sm">{message}</TypographyText>
    </TaskWindow>
  );
};
