import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../../features/pokemon/pokemonSlice';
import Loading from '../Loading/Loading';
import { STATUS } from '../../features/pokemon/pokemonSlice';
import Error from '../Error/Error';

const PokemonList = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const status = useSelector((state) => state.pokemon.status);
  const error = useSelector((state) => state.pokemon.error);

  useEffect(() => {
    if (status === STATUS.idle) {
      dispatch(fetchPokemons());
    }
  }, [dispatch, status]);

  if (status === STATUS.loading) {
    return <Loading />;
  }

  if (status === STATUS.failed) {
    return <Error error={error} />;
  }

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default PokemonList;
