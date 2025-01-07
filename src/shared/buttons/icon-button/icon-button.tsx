import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cn from "classnames";

import styles from "./icon-button.module.scss";

import { Button } from "../button/button";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  testId: string;
};

export const IconButton: FC<ButtonType> = ({ icon, className, ...props }) => {
  return (
    <Button
      {...props}
      className={cn(styles.iconButton, className)}
      category="default"
    >
      {icon}
    </Button>
  );
};
