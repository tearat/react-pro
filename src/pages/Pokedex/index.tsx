import React, { useState } from 'react';
import s from './Pokedex.module.scss';
import PokemonCard from '../../components/PokemonCard/index';
import useData, { IPokemon } from '../../hook/getData';

const Poredex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((st) => ({
      ...st,
      name: event.target.value,
    }));
  };

  // if (isLoading) {
  //   return <div className={s.status}>Loading 🤔</div>;
  // }

  if (isError) {
    return <div className={s.status}>Error 🔥</div>;
  }

  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.contentTitle}>
          {!isLoading && data.total} <strong>pokemons</strong> for you to choose your favorite
        </div>

        <div className={s.contentSearch}>
          <input type="text" placeholder="find a pokemon" value={searchValue} onChange={handleSearchChange} />
        </div>
      </div>

      <div className={s.contentGrid}>
        {!isLoading &&
          data.pokemons.map((pokemon: IPokemon) => (
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
    </div>
  );
};

export default Poredex;
