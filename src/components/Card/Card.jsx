import PropTypes from 'prop-types';
import { openModal } from '../../features/pokemon/pokemonModalSlice';
import { useDispatch } from 'react-redux';

import {
  PokemonCard,
  Name,
  Header,
  SpriteContainer,
  Sprite,
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
      <Header>
        <Name>{pokemon?.name}</Name>
      </Header>

      <SpriteContainer>
        <Sprite src={pokemon?.sprite} alt={pokemon?.name} />
      </SpriteContainer>
    </PokemonCard>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
