import React, {
    createContext,
    useEffect,
    useContext,
    useState,
    ReactNode,
  } from "react";
  import { useColorScheme } from "react-native";
import { lightMode } from "./theme";
  
  // Define the types for the theme
  type Theme = {
    dark: boolean;
    colors: typeof lightMode;
    setScheme: (scheme: string) => void;
  };
  
  // Create a context with a default value
  export const ThemeContext = createContext<Theme>({
    dark: false,
    colors: lightMode,
    setScheme: () => {},
  });
  
  // Define the props for the ThemeProvider
  interface ThemeProviderProps {
    children: ReactNode;
  }
  
  export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
    const colorScheme = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState(colorScheme === "light");
  
    useEffect(() => {
      setIsDarkMode(colorScheme === "light");
    }, [colorScheme]);
  
    const defaultTheme: Theme = {
      dark: isDarkMode,
      colors: isDarkMode ? lightMode : lightMode,
      setScheme: (scheme: string) => setIsDarkMode(scheme === "light"),
    };
  
    return (
      <ThemeContext.Provider value={defaultTheme}>
        {props.children}
      </ThemeContext.Provider>
    );
  };
  
  // Custom hook to use the theme context
  export const useTheme = () => useContext(ThemeContext);
  