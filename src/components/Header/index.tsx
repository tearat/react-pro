import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';

import s from './Header.module.scss';
import { ReactComponent as PokemonLogo } from '~/assets/images/Logo.svg';
import { GENERAL_MENU } from '../../router';

// interface IMenu {
//   id: number;
//   title: string;
//   link: string;
// }

// const MENU: IMenu[] = [
//   { id: 1, title: 'Home', link: '/' },
//   { id: 2, title: 'Pokédex', link: '/pokedex' },
//   { id: 3, title: 'Legendaries', link: '#' },
//   { id: 4, title: 'Documentation', link: '#' },
// ];

const Header = () => {
  const path = usePath();
  return (
    <div className={s.header}>
      <div className={s.headerContent}>
        <PokemonLogo />
        <ul className={s.headerContentLinks}>
          {GENERAL_MENU.map(({ id, title, link }) => (
            <li key={id} className={cn({ [s.activeLink]: link === path })}>
              <A href={link}>{title}</A>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
