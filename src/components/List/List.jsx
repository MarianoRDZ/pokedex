import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../../features/pokemon/pokemonSlice';
import Loading from '../Loading/Loading';
import { STATUS } from '../../features/pokemon/pokemonSlice';
import Error from '../Error/Error';
import Card from '../Card/Card';
import { PokemonList } from './List.styles';

const List = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const search = useSelector((state) => state.pokemon.search);
  const status = useSelector((state) => state.pokemon.status);
  const error = useSelector((state) => state.pokemon.error);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

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
    <PokemonList>
      {filteredPokemons.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} handleClick={() => null} />
      ))}
    </PokemonList>
  );
};

export default List;
