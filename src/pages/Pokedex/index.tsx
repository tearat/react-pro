import React, { useEffect, useState } from 'react';
import s from './Pokedex.module.scss';
import PokemonCard from '../../components/PokemonCard/index';

interface IData {
  total: number;
  pokemons: Array<IPokemon>;
}

interface IPokemon {
  id: number;
  // eslint-disable-next-line camelcase
  name_clean: string;
  stats: IStats;
  img: string;
  types: Array<string>;
}

interface IStats {
  attack: number;
  defense: number;
}

const usePokemons = () => {
  const [data, setData] = useState<IData>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Poredex = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div className={s.status}>Loading 🤔</div>;
  }

  if (isError) {
    return <div className={s.status}>Error 🔥</div>;
  }

  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.contentTitle}>
          {data.total} <strong>pokemons</strong> for you to choose your favorite
        </div>

        <div className={s.contentSearch}>
          <input type="text" placeholder="find a pokemon" />
        </div>
      </div>

      <div className={s.contentGrid}>
        {data.pokemons.map((pokemon: IPokemon) => (
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
