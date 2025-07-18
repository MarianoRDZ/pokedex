import usePokemons from '../../hooks/usePokemon';
import { useDispatch } from 'react-redux';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Card from '../Card/Card';
import { PokemonList } from './List.styles';
import {
  convertPokemonIdToThreeDigits,
  getPokemonTypes,
} from '../../utils/utils';
import { VARIANT } from '../Sprite/Sprite';
import TypePill from '../TypePill/TypePill';
import { openModal } from '../../features/pokemon/pokemonModalSlice';
import { STATUS } from '../../features/pokemon/pokemonSlice';

const List = () => {
  const dispatch = useDispatch();
  const { pokemons, status, error } = usePokemons();

  if (status === STATUS.loading) return <Loading />;
  if (status === STATUS.failed) return <Error error={error} />;

  return (
    <PokemonList>
      {pokemons.map((pokemon) => (
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
