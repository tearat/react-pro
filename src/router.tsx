import React from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Empty';
import Poredex from './pages/Pokedex/index';

interface IGeneralMenu {
  id: number;
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    id: 1,
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    id: 2,
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Poredex />,
  },
  {
    id: 3,
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="legendaries" />,
  },
  {
    id: 4,
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="documentation" />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
