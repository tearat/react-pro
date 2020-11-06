import React from 'react';

import s from './index.module.scss';
import { ReactComponent as PokemonLogo } from '~/assets/images/Logo.svg';

interface IMenu {
  id: number;
  title: string;
  link: string;
}

const MENU: IMenu[] = [
  { id: 1, title: 'Home', link: '#' },
  { id: 2, title: 'Pokédex', link: '#' },
  { id: 3, title: 'Legendaries', link: '#' },
  { id: 4, title: 'Documentation', link: '#' },
];

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.headerContent}>
        <PokemonLogo />
        <ul className={s.headerContentLinks}>
          {MENU.map(({ id, title, link }) => (
            <li key={id}>
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
