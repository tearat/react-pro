import React, { useState, useEffect } from 'react';
import s from './Pokedex.module.scss';
import PokemonCard from '../../components/PokemonCard/index';
import useData from '../../hook/getData';
import { PokemonsRequest, IPokemons } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';

interface IQuery {
  name?: string;
}

const Poredex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: event.target.value,
    }));
  };

  useEffect(() => {}, [debouncedValue]);

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
          {!isLoading && data && data.total} <strong>pokemons</strong> for you to choose your favorite
        </div>

        <div className={s.contentSearch}>
          <input type="text" placeholder="find a pokemon" value={searchValue} onChange={handleSearchChange} />
        </div>
      </div>

      <div className={s.contentGrid}>
        {!isLoading &&
          data &&
          data.pokemons.map((pokemon: PokemonsRequest) => (
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
