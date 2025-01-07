import { FC } from "react";
import cn from "classnames";

import { useExplorerWindow } from "@shared/explorer-window/providers";
import { Button } from "@shared/buttons";
import { TypographyText } from "@shared/typography";

import { getFooterButtonProps } from "./helpers";

import styles from "./footer.module.scss";

export const Footer: FC = () => {
  const {
    buttons,
    onCloseExplorer,
    footerAlign = "right",
  } = useExplorerWindow();

  if (!buttons.length) {
    return null;
  }

  return (
    <div className={cn(styles.footer, styles[`align-${footerAlign}`])}>
      {buttons.map((props) => {
        const { id, value, formId, disabled } = props;

        const buttonProps = getFooterButtonProps({
          props,
          onCloseExplorer,
        });

        return (
          <Button
            {...buttonProps}
            form={formId}
            key={id}
            className={styles.button}
            disabled={disabled}
          >
            <TypographyText
              size="sm"
              className={cn({ [styles.disabled]: disabled })}
            >
              {value}
            </TypographyText>
          </Button>
        );
      })}
    </div>
  );
};
