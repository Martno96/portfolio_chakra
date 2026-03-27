import { ThemeProvider } from 'next-themes';
import { useState } from 'react';
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
} from '@chakra-ui/react';
import { DynamicThemeContext } from '@/contexts/themeContext';

export const DynamicThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  return (
    <DynamicThemeContext.Provider value={{ theme, setTheme }}>
      <ChakraProvider value={createSystem(defaultConfig)}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </ChakraProvider>
    </DynamicThemeContext.Provider>
  );
};
