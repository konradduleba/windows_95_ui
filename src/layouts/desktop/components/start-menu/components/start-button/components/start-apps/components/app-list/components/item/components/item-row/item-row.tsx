import { FC, PropsWithChildren } from "react";
import cn from "classnames";

import { StartAppCommonTypes } from "@providers/start-app-provider/types";

import { TypographyText } from "@shared/typography";

import SvgChevron from "@icons/chevron";

import { useItemRowHandlers } from "./hooks";

import styles from "./item-row.module.scss";

type ItemRowProps = Omit<StartAppCommonTypes, "id"> & {
  onClick?: () => void;
  hasOptions?: boolean;
};

export const ItemRow: FC<PropsWithChildren<ItemRowProps>> = ({
  icon,
  value,
  onClick,
  hasOptions,
  children,
}) => {
  const { isMenuOpen, onKeyPress, onClickElement, onMouseEnter, onMouseLeave } =
    useItemRowHandlers({ onClick });

  return (
    <li
      className={cn(styles.item, {
        [styles.options]: hasOptions,
      })}
      onClick={onClickElement}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={0}
      onKeyDown={onKeyPress}
    >
      {icon}
      <TypographyText size="md" className={styles.name}>
        {value}
      </TypographyText>
      {hasOptions && <SvgChevron className={styles.chevron} fontSize={8} />}
      {isMenuOpen && <>{children}</>}
    </li>
  );
};
