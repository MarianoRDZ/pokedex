import PropTypes from 'prop-types';
import {
  PokemonCard,
  Name,
  Header,
  SpriteContainer,
  Sprite,
} from './PokemonCard.styles';

const Card = ({ name, sprite, handleClick }) => {
  return (
    <PokemonCard
      role="article"
      aria-label={`Pokemon: ${name}`}
      className="card"
      onClick={handleClick}
    >
      <Header>
        <Name>{name}</Name>
      </Header>

      <SpriteContainer>
        <Sprite src={sprite} alt={name} />
      </SpriteContainer>
    </PokemonCard>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
