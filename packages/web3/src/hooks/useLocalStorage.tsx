import { useState, useEffect } from "react";

export const useLocalStorage = (key: string, initial: string) => {
  const item = window.localStorage.getItem(key);

  const [value, setValue] = useState<string>(item || initial);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    window.localStorage.setItem(key, value);
    setHasMounted(true);
  }, [value, key]);

  return { value, setValue, hasMounted };
};
