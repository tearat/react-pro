import React from 'react';

import s from './index.module.scss';
import logo from '~/assets/images/Logo.svg';

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.headerContent}>
        <img className={s.headerContentLogo} src={logo} alt="logo" />
        <ul className={s.headerContentLinks}>
          <li className={s.selected}>Home</li>
          <li>Pokédex</li>
          <li>Legendaries</li>
          <li>Documentation</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
