import React, {
  createContext,
  useEffect,
  useContext,
  useState,
  ReactNode,
} from 'react';
import {useColorScheme} from 'react-native';
import {darkMode, lightMode} from './theme';

type ThemeColors = typeof lightMode | typeof darkMode;

interface Theme {
  dark: boolean;
  colors: ThemeColors;
  setScheme: (scheme: string) => void;
}

export const ThemeContext = createContext<Theme>({
  dark: false,
  colors: lightMode,
  setScheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = props => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  useEffect(() => {
    setIsDarkMode(colorScheme === 'dark');
  }, [colorScheme]);

  const defaultTheme: Theme = {
    dark: isDarkMode,
    colors: isDarkMode ? darkMode : lightMode,
    setScheme: (scheme: string) => setIsDarkMode(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useThemeHook = () => useContext(ThemeContext);
