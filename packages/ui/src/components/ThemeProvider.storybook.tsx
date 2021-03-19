import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import React, { createContext, useContext, useState } from "react";
import { tailwind } from "./tailwind.theme";

const ThemeContext: React.Context<{ tailwindTheme: any; setTheme: any }> = createContext({
  tailwindTheme: { ...tailwind },
  setTheme: () => {},
});

export const ThemeProvider: ({ theme, children }: { theme?: any; children: any }) => React.ReactElement = ({
  theme,
  children,
}) => {
  const [tailwindTheme, setTheme] = useState(tailwind);
  console.log(tailwind);
  return (
    <EmotionThemeProvider theme={theme ? theme : tailwindTheme}>
      <ThemeContext.Provider value={{ tailwindTheme, setTheme }}>{children}</ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export const useThemeContext: () => {
  tailwindTheme: any;
  setTheme: any;
} = () => useContext(ThemeContext);

// export const useLocalStorage = (key, initial) => {
//   const item = window.localStorage.getItem(key);

//   const [value, setValue] = useState(item || initial);
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     window.localStorage.setItem(key, value);
//     setHasMounted(true);
//   }, [value, key]);

//   return [value, setValue, hasMounted];
// };

// export const useThemeToggle = (localStorageKey = "theme") => {
//   const [theme, setTheme, hasMounted] = useLocalStorage(localStorageKey, "light");
//   const toggleTheme = () => {
//     return setTheme((theme) => (theme === "dark" ? "light" : "dark"));
//   };
//   return { theme, toggleTheme, hasMounted };
// };
