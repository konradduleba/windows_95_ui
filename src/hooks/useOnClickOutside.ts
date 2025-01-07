import { useEffect, useRef } from "react";

import { useScreenProperties } from "@providers/screen-properties-provider/hooks";

type UseOnClickOutsideProps = {
  onClickOutside: () => void;
};

export const useOnClickOutside = <RefType extends HTMLElement>({
  onClickOutside,
}: UseOnClickOutsideProps) => {
  const { screenRef } = useScreenProperties();
  const elementRef = useRef<RefType>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (!elementRef.current) {
      return;
    }

    // Check if the clicked element is not the menu or a descendant of it
    if (!elementRef.current.contains(event.target as Node)) {
      onClickOutside();
    }
  };

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (screenRef.current) {
        screenRef.current.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [screenRef, onClickOutside]);

  return {
    elementRef,
  };
};
