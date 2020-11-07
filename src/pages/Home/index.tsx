import React from 'react';
import s from './Home.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Parallax from '../../components/Parallax';

const HomePage = () => {
  const onClickButton = () => {
    console.log('Click');
  };

  return (
    <div className={s.root}>
      <Header />
      <div className={s.content}>
        <Heading type="h1">
          <strong>Find</strong> all your <br /> favorite <strong>Pokemon</strong>
        </Heading>

        <Heading type="h2">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>

        <Button onClick={onClickButton} color="yellow">
          See pokemons
        </Button>

        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
