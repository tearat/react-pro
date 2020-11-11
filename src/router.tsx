import React from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Empty';
import Poredex from './pages/Pokedex/index';

export const GENERAL_MENU = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    component: () => <HomePage />,
  },
  {
    id: 2,
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <Poredex />,
  },
  {
    id: 3,
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <EmptyPage title="legendaries" />,
  },
  {
    id: 4,
    title: 'Documentation',
    link: '/documentation',
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
