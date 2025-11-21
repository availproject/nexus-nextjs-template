import { useCallback, useRef } from "react";

/**
 * Returns a stable function identity that always calls the latest implementation.
 * Useful when passing callbacks to memoized children without re-creating handlers.
 */
export function useStableCallback<T extends (...args: T[]) => T>(fn: T): T {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;

   
  const stable = useCallback(
    ((...args: Parameters<T>) => {
      return fnRef.current(...args);
    }) as T,
    []
  );

  return stable;
}
