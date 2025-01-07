import { FC, ReactNode } from "react";

import { GenericResponseError } from "@api/types";

import { useGetErrorMessage } from "@hooks/errors/useGetErrorMessage";

import { TypographyText } from "@shared/typography";

import { ErrorIcon, TaskWindow } from "./components";

export type ResponseErrorProps = GenericResponseError & {
  customMessage?: ReactNode;
  customTitle?: ReactNode;
};

export const ResponseError: FC<ResponseErrorProps> = (errorProps) => {
  const { statusCode, customMessage, customTitle } = errorProps;
  const message = useGetErrorMessage(errorProps);

  return (
    <TaskWindow statusCode={statusCode} customTitle={customTitle}>
      <ErrorIcon />
      <TypographyText size="sm">
        {customMessage ? customMessage : message}
      </TypographyText>
    </TaskWindow>
  );
};
