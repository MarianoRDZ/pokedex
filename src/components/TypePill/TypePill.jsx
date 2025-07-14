import PropTypes from 'prop-types';
import { Pill, TypeName } from './TypePill.styles';

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
  size: PropTypes.oneOf(['sm', 'xl']).isRequired,
};

export default TypePill;
