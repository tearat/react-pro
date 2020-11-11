import React from 'react';
import { navigate } from 'hookrouter';
import s from './Home.module.scss';

import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Parallax from '../../components/Parallax';
import { LinkEnum } from '../../router';

const HomePage = () => {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <Heading type="h1">
          <strong>Find</strong> all your <br /> favorite <strong>Pokemon</strong>
        </Heading>

        <Heading type="h2">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>

        <Button onClick={() => navigate(LinkEnum.POKEDEX)} color="yellow">
          See pokemons
        </Button>

        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
