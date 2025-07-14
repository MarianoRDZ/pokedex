import PropTypes from 'prop-types';
import { openModal } from '../../features/pokemon/pokemonModalSlice';
import { useDispatch } from 'react-redux';
import {
  convertPokemonIdToThreeDigits,
  getPokemonTypes,
} from '../../utils/utils';
import TypePill from '../TypePill/TypePill';

import {
  PokemonCard,
  PokemonName,
  PokemonId,
  PokemonTypes,
} from './PokemonCard.styles';
import { VARIANT } from '../Sprite/Sprite';
import Sprite from '../Sprite/Sprite';

const Card = ({ pokemon }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal(pokemon));
  };

  return (
    <PokemonCard
      role="article"
      aria-label={`Pokemon: ${pokemon.name}`}
      className="card"
      onClick={handleClick}
    >
      <PokemonId>
        <p>#{convertPokemonIdToThreeDigits(pokemon.id)}</p>
      </PokemonId>
      <Sprite src={pokemon.sprite} alt={pokemon.name} variant={VARIANT.sm} />
      <PokemonName>{pokemon?.name}</PokemonName>
      <PokemonTypes>
        {getPokemonTypes(pokemon).map((p, index) => (
          <TypePill key={index} type={p.type} size={'sm'} />
        ))}
      </PokemonTypes>
    </PokemonCard>
  );
};

Card.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
  }).isRequired,
};

export default Card;
