import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../../features/pokemon/pokemonThunks';
import Loading from '../Loading/Loading';
import { STATUS } from '../../features/pokemon/pokemonSlice';
import { openModal } from '../../features/pokemon/pokemonModalSlice';
import {
  convertPokemonIdToThreeDigits,
  getPokemonTypes,
} from '../../utils/utils';
import Error from '../Error/Error';
import Card from '../Card/Card';
import { PokemonList } from './List.styles';
import { VARIANT } from '../Sprite/Sprite';
import TypePill from '../TypePill/TypePill';

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
        <Card
          key={pokemon.name}
          onClick={() => dispatch(openModal(pokemon))}
          role="article"
          aria-label={`Pokemon: ${pokemon.name}`}
        >
          <Card.Id>#{convertPokemonIdToThreeDigits(pokemon.id)}</Card.Id>
          <Card.Image
            src={pokemon.sprite}
            alt={pokemon.name}
            variant={VARIANT.sm}
          />
          <Card.Name>{pokemon.name}</Card.Name>
          <Card.Types>
            {getPokemonTypes(pokemon).map((p, index) => (
              <TypePill key={index} type={p.type} size={'sm'} />
            ))}
          </Card.Types>
        </Card>
      ))}
    </PokemonList>
  );
};

export default List;
