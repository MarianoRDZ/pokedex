import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../features/pokemon/pokemonThunks';
import { STATUS } from '../features/pokemon/pokemonSlice';

const usePokemons = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const search = useSelector((state) => state.pokemon.search);
  const status = useSelector((state) => state.pokemon.status);
  const error = useSelector((state) => state.pokemon.error);

  useEffect(() => {
    if (status === STATUS.idle) {
      dispatch(fetchPokemons());
    }
  }, [dispatch, status]);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return {
    pokemons: filteredPokemons,
    status,
    error,
  };
};

export default usePokemons;
