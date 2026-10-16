import React, { useContext } from 'react';
import ThemeContext from './contexts';
const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const className = theme.className;
  return (
    <article className={className}>
      Текст для вкладки Profile
    </article>
  );
};
export default Profile;