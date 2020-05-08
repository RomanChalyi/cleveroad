import React from 'react';
import { header } from './header.module.scss';
import Link from '../Link';

const Header = ({ isAuthorization }) => {
  return (
    <header className={header}>
      <Link url="/" text="Home" />
      <Link
        url={isAuthorization ? '' : 'authorization'}
        text={isAuthorization ? 'Logout' : 'Login'}
      />
    </header>
  );
};

export default Header;
