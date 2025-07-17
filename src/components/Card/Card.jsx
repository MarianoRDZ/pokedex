import {
  PokemonCard,
  PokemonName,
  PokemonId,
  PokemonTypes,
} from './PokemonCard.styles';
import Sprite from '../Sprite/Sprite';
import PropTypes from 'prop-types';

const Card = ({ children, ...props }) => {
  return <PokemonCard {...props}>{children}</PokemonCard>;
};

const Id = ({ children, ...props }) => (
  <PokemonId {...props}>
    <p>{children}</p>
  </PokemonId>
);

const Image = ({ ...props }) => <Sprite {...props} />;

const Name = ({ children, ...props }) => (
  <PokemonName {...props}>{children}</PokemonName>
);

const Types = ({ children, ...props }) => (
  <PokemonTypes {...props}>{children}</PokemonTypes>
);

Card.Id = Id;
Card.Image = Image;
Card.Name = Name;
Card.Types = Types;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

Id.propTypes = {
  children: PropTypes.node.isRequired,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['sm', 'lg']),
};

Name.propTypes = {
  children: PropTypes.node.isRequired,
};

Types.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.displayName = 'Card';
Id.displayName = 'Card.Id';
Image.displayName = 'Card.Image';
Name.displayName = 'Card.Name';
Types.displayName = 'Card.Types';

export default Card;
