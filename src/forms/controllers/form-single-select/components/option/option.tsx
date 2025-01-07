import { FC } from "react";
import { OptionProps } from "react-select";
import cn from "classnames";

import { TypographyText } from "@shared/typography";

import { SELECT_OPTION_TEST_ID } from "../../constants";

import styles from "./option.module.scss";

export const Option: FC<OptionProps> = ({
  innerProps,
  innerRef,
  isSelected,
  label,
  isFocused,
}) => {
  return (
    <div ref={innerRef} {...innerProps} data-testid={SELECT_OPTION_TEST_ID}>
      <TypographyText
        size="sm"
        className={cn(styles.option, {
          [styles.focused]: isFocused,
          [styles.selected]: isSelected,
        })}
      >
        {label}
      </TypographyText>
    </div>
  );
};
