import PropTypes from 'prop-types';

const Card = ({ name }) => {
  return (
    <div role="article" aria-label={`Pokemon: ${name}`} className="card">
      <p>{name}</p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
