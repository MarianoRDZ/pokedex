import PropTypes from 'prop-types';
import { PokemonCard } from './PokemonCard.styles';

const Card = ({ name, handleClick }) => {
  return (
    <PokemonCard
      role="article"
      aria-label={`Pokemon: ${name}`}
      className="card"
      onClick={handleClick}
    >
      <p>{name}</p>
    </PokemonCard>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
