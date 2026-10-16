import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';
const themes = [
  {
    id: 1,
    name: 'White',
    className: 'light',
  },
  {
    id: 2,
    name: 'Black',
    className: 'dark',
  },
  {
    id: 3,
    name: 'Blue',
    className: 'dark-blue',
  },
];
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes[0]);
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };
  return (
    <ThemeContext.Provider value={{ themes, theme, changeTheme }}>
      <div className={theme.className}>{children}</div>
    </ThemeContext.Provider>
  );
};
const App = () => (
  <ThemeProvider>
    <Tabs className="mb-3">
      <Tab eventKey="home" title="Home">
        <Home />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Profile />
      </Tab>
    </Tabs>
    <ThemeSwitcher />
  </ThemeProvider>
);
export default App;