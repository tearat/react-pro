import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Empty';
import Poredex from './pages/Pokedex/index';
import Pokemon, { PokemonProps } from './pages/Pokemon';

interface IGeneralMenu {
  // id: number;
  title: string;
  link: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    // id: 1,
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    // id: 2,
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Poredex />,
  },
  {
    // id: 3,
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="legendaries" />,
  },
  {
    // id: 4,
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="documentation" />,
  },
];

const SECOND_ROUTES: IGeneralMenu[] = [
  {
    // id: 1,
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: PokemonProps) => <Pokemon id={id} />,
  },
];

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
