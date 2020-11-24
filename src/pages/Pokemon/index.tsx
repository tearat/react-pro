import React from 'react';
import { PokemonsRequest } from '../../interface/pokemons';
import useData from '../../hook/getData';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonsRequest>('getPokemon', { id });

  if (isLoading) {
    return <div>Loading 🤔</div>;
  }

  return <div>This is pokemonm id quals {data?.name}</div>;
};

export default Pokemon;
