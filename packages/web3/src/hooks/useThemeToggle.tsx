import { useLocalStorage } from "./useLocalStorage";

export const useThemeToggle = (localStorageKey = "theme") => {
  const [theme, setTheme, hasMounted] = useLocalStorage(localStorageKey, "light");
  const toggleTheme = () => {
    return setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };
  return { theme, toggleTheme, hasMounted };
};
