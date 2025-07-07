import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../features/pokemon/pokemonSlice';
import { fetchPokemons } from '../../features/pokemon/pokemonSlice';
import Loading from '../Loading/Loading';
import { STATUS } from '../../features/pokemon/pokemonSlice';
import Error from '../Error/Error';
import Card from '../Card/Card';
import { PokemonList } from './List.styles';

const List = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const status = useSelector((state) => state.pokemon.status);
  const error = useSelector((state) => state.pokemon.error);

  /*const getPokemonDetails = (selectedPokemon) => {
    const pokemon = pokemons.filter(
      (pokemon) => pokemon.name === selectedPokemon
    );

    return pokemon;
  };*/

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
      {pokemons.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} handleClick={() => null} />
      ))}
    </PokemonList>
  );
};

export default List;
