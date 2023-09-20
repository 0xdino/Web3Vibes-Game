import { useEffect, useRef } from "react";

type EffectCallback = () => (() => void) | void;

/**
 * @dev This hook allows you to avoid re-rendering useEffect
 * with an empty array of dependencies
 */
export const useEffectOnce = (effect: EffectCallback): void => {
  const destroyFunc = useRef<(() => void) | undefined>();
  const effectCalled = useRef(false);
  const renderAfterCalled = useRef(false);

  if (effectCalled.current) {
    renderAfterCalled.current = true;
  }

  useEffect(() => {
    if (!effectCalled.current) {
      const res = effect();

      if (res) destroyFunc.current = res;

      effectCalled.current = true;
    }

    return () => {
      if (!renderAfterCalled.current) {
        return;
      }
      if (destroyFunc.current) {
        destroyFunc.current();
      }
    };
  }, [effect]);
};
