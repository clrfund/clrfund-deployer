import { useState, useEffect } from "react";

export const useLocalStorage = (key, initial) => {
  const item = window.localStorage.getItem(key);

  const [value, setValue] = useState(item || initial);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(key, value);
    setHasMounted(true);
  }, [value, key]);

  return [value, setValue, hasMounted];
};
