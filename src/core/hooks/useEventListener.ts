import { useCallback, useEffect, useRef } from "react";

interface UseEventListenerProps {
  eventName: string;
  isAllowOutsideClose?: boolean;
  updateValue?: string | null;
  listener: EventListener | ((event: KeyboardEvent) => void);
}

export const useEventListener = ({
  eventName,
  isAllowOutsideClose,
  updateValue,
  listener,
}: UseEventListenerProps): void => {
  const savedListener = useRef(listener);

  const handleEventListener = useCallback((event: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    savedListener.current?.(event);
  }, []);

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    if (isAllowOutsideClose) {
      window.addEventListener(eventName, handleEventListener);
    }

    return () => window.removeEventListener(eventName, handleEventListener);
  }, [eventName, updateValue]);
};

