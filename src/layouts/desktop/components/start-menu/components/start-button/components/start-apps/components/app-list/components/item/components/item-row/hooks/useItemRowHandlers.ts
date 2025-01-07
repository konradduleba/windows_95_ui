import { useState } from "react";

type UseItemRowHandlersProps = {
  onClick?: () => void;
};

export const useItemRowHandlers = ({ onClick }: UseItemRowHandlersProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickElement = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();

    onClick?.();
  };

  const onMouseEnter = () => {
    setIsMenuOpen(true);
  };
  const onMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsMenuOpen((prevState) => !prevState);
    }
  };

  return {
    isMenuOpen,
    onClickElement,
    onMouseEnter,
    onMouseLeave,
    onKeyPress,
  };
};
