import React, { useContext } from 'react';
import ThemeContext from './contexts';
const Home = () => {
  const { theme } = useContext(ThemeContext);
  const className = theme.className;
  return (
    <article className={className}>
      Текст для вкладки Home
    </article>
  );
};
export default Home;