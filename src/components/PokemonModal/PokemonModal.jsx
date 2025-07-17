const PokemonModal = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const PokemonName = ({ children, ...props }) => <h3 {...props}>{children}</h3>;
const PokemonImage = ({ children, ...props }) => <h3 {...props}>{children}</h3>;

PokemonModal.PokemonName = PokemonName;
PokemonModal.PokemonImage = PokemonImage;

export default PokemonModal;
