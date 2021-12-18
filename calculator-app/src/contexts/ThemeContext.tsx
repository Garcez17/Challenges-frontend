import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

type ThemeContextData = {
  theme: 'light' | 'blue' | 'purple';
  toogleTheme: (theme: 'light' | 'blue' | 'purple') => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

type ThemeProviderProps = {
  children: ReactNode;
}

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const cookies = parseCookies();

  const [theme, setTheme] = useState<'light' | 'blue' | 'purple'>(null);

  useEffect(() => {
    if (cookies['calculator-app.theme']) {
      setTheme(cookies['calculator-app.theme'] as 'light' | 'blue' | 'purple');
      return;
    }

    if (typeof window != "undefined") {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setCookie(undefined, 'calculator-app.theme', 'blue', {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/',
        });

        setTheme('blue');
      } else {
        setCookie(undefined, 'calculator-app.theme', 'light', {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/',
        });

        setTheme('light');
      }
    }
  }, []);

  const toogleTheme = useCallback((typeTheme: 'light' | 'blue' | 'purple') => {
    setTheme(typeTheme);

    setCookie(undefined, 'calculator-app.theme', typeTheme, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}