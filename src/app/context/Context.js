import { createContext, useState } from 'react';

const initialState = {
  theme: 'light',
};

const darkTheme = `:root {
  --background: #272727;
  --header: #323232;
  --sidebar: #323232;
  --filters: #323232;
  --modal: #323232;
  --card: #323232;
  --dialog: #323232;
  --border: #1b1b1b;
  --dialog: #323232;
  --border: #f3f3f32b;
  --box: #3d3d3d;
}`;

const lightTheme = `:root {
  --background: #ffffff;
  --header: #ffffff;
  --sidebar: #f3f2ef;
  --filters: #ffff;
  --modal: #ffff;
  --card: #ffff;
  --dialog: #ffff;
  --border: #f3f2ef;
  --box: #f3f2ef;
}`;

export const UsersContext = createContext(initialState);

const UsersContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme);
  const removeTheme = (theme) => {
    const themeA = document.querySelector('#' + theme);
    if (themeA !== null) {
      themeA.remove();
    }
  };
  const toggleTheme = () => {
    removeTheme(theme);
    const headTag = document.getElementsByTagName('head')[0];
    const styleTag = document.createElement('style');
    if (theme === 'light') {
      styleTag.setAttribute('id', 'dark');
      styleTag.innerHTML = darkTheme;
      headTag.appendChild(styleTag);
      setTheme('dark');
    }
    if (theme === 'dark') {
      styleTag.setAttribute('id', 'light');
      styleTag.innerHTML = lightTheme;
      headTag.appendChild(styleTag);
      setTheme('light');
    }
  };
  return (
    <UsersContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
