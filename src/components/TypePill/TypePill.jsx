import PropTypes from 'prop-types';

import { Pill, TypeName } from './TypePill.styles';

const TypePill = ({ type }) => {
  const { name } = type;

  return (
    <Pill type={name}>
      <TypeName>{name}</TypeName>
    </Pill>
  );
};

TypePill.propTypes = {
  type: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TypePill;
