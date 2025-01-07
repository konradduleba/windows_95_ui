import { FC, useState } from "react";
import { Trans } from "@lingui/react";

import { Button } from "shared/buttons";

import SvgWindows95WithoutText from "@icons/windows-95-without-text";

import { TypographyHeading } from "@shared/typography";

import { useOnClickOutside } from "@hooks/useOnClickOutside";

import { StartApps } from "./components";

import { START_BUTTON_TEST_ID } from "./constants";

import { MESSAGES } from "./translations";

import styles from "./start-button.module.scss";

export const StartButton: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const onClickOutside = () => {
    setIsMenuOpen(false);
  };
  const { elementRef } = useOnClickOutside<HTMLButtonElement>({
    onClickOutside,
  });

  const onClickStartButton = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <Button
      buttonRef={elementRef}
      onClick={onClickStartButton}
      className={styles.startButton}
      testId={START_BUTTON_TEST_ID}
    >
      <SvgWindows95WithoutText className={styles.icon} />
      <TypographyHeading size="sm" className={styles.text}>
        <Trans id={MESSAGES.START.id} />
      </TypographyHeading>
      {isMenuOpen && <StartApps />}
    </Button>
  );
};
