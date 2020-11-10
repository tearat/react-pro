import React from 'react';
import s from './Pokedex.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PokemonCard from '../../components/PokemonCard/index';
import pokemons from '../../pokemons';

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

      <div className={s.contentGrid}>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            title={pokemon.name_clean}
            attack={pokemon.stats.attack}
            defense={pokemon.stats.defense}
            img={pokemon.img}
            types={pokemon.types}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Poredex;
