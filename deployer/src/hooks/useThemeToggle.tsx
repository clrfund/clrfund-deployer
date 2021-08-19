import { useLocalStorage } from "./useLocalStorage";

export const useThemeToggle = (localStorageKey: string = "theme") => {
  const { value: theme, setValue: setTheme, hasMounted } = useLocalStorage(localStorageKey, "light");
  const toggleTheme = () => {
    return setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };
  return { theme, toggleTheme, hasMounted };
};
