import { FC } from "react";
import { SingleValueProps } from "react-select";

import { TypographyText } from "@shared/typography";

import { SelectOption } from "../../types";

import { SELECT_SINGLE_VALUE_TEST_ID } from "../../constants";

export const SingleValue: FC<SingleValueProps> = ({ data, innerProps }) => {
  const { label } = data as SelectOption;

  return (
    <div {...innerProps} data-testid={SELECT_SINGLE_VALUE_TEST_ID}>
      <TypographyText size="sm">{label}</TypographyText>
    </div>
  );
};
