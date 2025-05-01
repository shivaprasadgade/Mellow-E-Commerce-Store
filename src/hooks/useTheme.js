import { useTheme } from '../context/ThemeContext';

export const useThemeActions = () => {
  const { darkMode, toggleTheme } = useTheme();

  return { darkMode, toggleTheme };
};