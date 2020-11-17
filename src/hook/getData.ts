import { useEffect, useState } from 'react';
import request from '../utils/request';

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

const useData = (endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<IData>({
    total: 0,
    pokemons: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await request(endpoint, query);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
export type { IPokemon };
