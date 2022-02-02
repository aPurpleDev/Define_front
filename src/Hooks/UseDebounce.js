import { useEffect, useState } from "react";

const useDebounce = (func, delay) => {
  const [debounceValue, setDebounceValue] = useState(func());

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(func());
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [func, delay]);

  return debounceValue;
};

export default useDebounce;
