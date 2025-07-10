import { convertPokemonIdToThreeDigits } from '../../utils/utils';
import Sprite, { VARIANT } from '../Sprite/Sprite';
import {
  Header,
  CloseButton,
  CloseModal,
  PokedexNumber,
  Title,
} from './ModalHeader.styles';

const ModalHeader = ({ selectedPokemon }) => {
  return (
    <Header type={selectedPokemon.types[0].type.name || 'normal'}>
      <CloseModal>
        <CloseButton onClick={() => dispatch(closeModal())}>X</CloseButton>
      </CloseModal>
      <Sprite
        src={selectedPokemon.sprite}
        alt={selectedPokemon.name}
        variant={VARIANT.xl}
      />
      <Title>{selectedPokemon.name}</Title>
      <PokedexNumber>
        #{convertPokemonIdToThreeDigits(selectedPokemon.id)}
      </PokedexNumber>
    </Header>
  );
};

export default ModalHeader;
