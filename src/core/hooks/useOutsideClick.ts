import { RefObject,useEffect } from "react";

export const useOutsideClick = <T extends HTMLElement>(
  refs: (RefObject<T> | null | undefined)[],
  callback: () => void,
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideClick = refs.every((ref) => {
        if (ref)
          return ref.current && !ref.current.contains(event.target as Node);

        return true;
      });

      if (isOutsideClick) {
        callback();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    const handleWindowResize = () => {
      callback();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [refs, callback]);
};
