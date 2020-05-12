import { useEffect } from 'react';

export default function useDebounceEffect(fn, deps, time) {
  const dependencies = [...deps, fn, time];

  useEffect(() => {
    const timeout = setTimeout(fn, time);
    return () => {
      clearTimeout(timeout);
    };
  }, dependencies);
}
