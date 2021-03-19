import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

import React, { createContext, useContext } from "react";
import { tailwind } from "./tailwind.theme";

const ThemeContext: React.Context<{ tailwindTheme: any }> = createContext({
  tailwindTheme: { ...tailwind },
});

export const ThemeProvider: ({ theme, children }: { theme?: any; children: any }) => React.ReactElement = ({
  theme,
  children,
}) => {
  // const [tailwindTheme, setTheme] = useState(tailwind);
  // console.log(tailwind);
  return (
    <EmotionThemeProvider theme={{ tailwind }}>
      <ThemeContext.Provider value={{ tailwindTheme: tailwind }}>{children}</ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export const useThemeContext: () => {
  tailwindTheme: any;
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
