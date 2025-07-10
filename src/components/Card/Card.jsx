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
  SpriteContainer,
  Sprite,
  PokemonId,
  PokemonTypes,
} from './PokemonCard.styles';

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
      <SpriteContainer>
        <Sprite src={pokemon?.sprite} alt={pokemon?.name} />
      </SpriteContainer>
      <PokemonName>{pokemon?.name}</PokemonName>
      <PokemonTypes>
        {getPokemonTypes(pokemon).map((pokemon) => (
          <TypePill key={pokemon.name} type={pokemon.type} />
        ))}
      </PokemonTypes>
    </PokemonCard>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
