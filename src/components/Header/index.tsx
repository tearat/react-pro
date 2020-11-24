import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';

import s from './Header.module.scss';
import { ReactComponent as PokemonLogo } from '~/assets/images/Logo.svg';
import { GENERAL_MENU } from '../../router';

const Header = () => {
  const path = usePath();
  return (
    <div className={s.header}>
      <div className={s.headerContent}>
        <PokemonLogo />
        <ul className={s.headerContentLinks}>
          {GENERAL_MENU.map(({ title, link }) => (
            <li key={link} className={cn({ [s.activeLink]: link === path })}>
              <A href={link}>{title}</A>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Header);
