import { useCallback, useEffect, useRef } from 'react';

const useTimeout = (callback: () => void, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(callback, delay);

    return clearTimer;
  }, [callback, delay, clearTimer]);

  return clearTimer;
};

export default useTimeout;
