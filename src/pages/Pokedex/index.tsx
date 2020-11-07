import React from 'react';
import s from './Pokedex.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Poredex = () => {
  return (
    <div className={s.root}>
      <Header />

      <div className={s.content}>
        <div className={s.contentTitle}>
          800 <strong>pokemons</strong> for you to choose your favorite
        </div>

        <div className={s.contentSearch}>
          <input type="text" placeholder="find a pokemon" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Poredex;
