import { FC } from "react";

import { TypographyText } from "@shared/typography";

import { getErrorMessage } from "@utils/errors/get-error-message";

import { ErrorIcon, TaskWindow } from "./components";

import { ResponseErrorProps, ResponseErrorTypes } from "./types";

export const ResponseError: FC<ResponseErrorProps> = (errorProps) => {
  const { type } = errorProps;

  if (type === ResponseErrorTypes.GENERIC) {
    const message = getErrorMessage(errorProps);

    return (
      <TaskWindow>
        <ErrorIcon />
        <TypographyText size="sm">{message}</TypographyText>
      </TaskWindow>
    );
  }
  const { message, title, id } = errorProps;

  return (
    <TaskWindow customTitle={title} customTaskId={id}>
      <ErrorIcon />
      <TypographyText size="sm">{message}</TypographyText>
    </TaskWindow>
  );
};
