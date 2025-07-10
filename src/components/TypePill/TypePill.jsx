import PropTypes from 'prop-types';
import { Pill, TypeName } from './TypePill.styles';

export const PILL_SIZE = {
  sm: {
    height: 20,
    fontSize: 0.75,
  },
  xl: {
    height: 30,
    fontSize: 1,
  },
};

const TypePill = ({ type, size }) => {
  const { name } = type;

  return (
    <Pill type={name} size={size}>
      <TypeName size={size}>{name}</TypeName>
    </Pill>
  );
};

TypePill.propTypes = {
  type: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TypePill;
