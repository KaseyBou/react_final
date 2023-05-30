import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const themes = {
  light: {
    foreground: '#242526',
    background: '#fff',
  },
  dark: {
    foreground: '#fff',
    background: '#000a30',
  },
};

// Let our context know what properties to expect
export const ThemeContext = createContext({
  theme: {},
  toggleTheme: () => {},
});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((previousValue) =>
      previousValue === themes.light ? themes.dark : themes.light
    );
  };

  useEffect(() => {
    document.body.style.background = theme.background;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
