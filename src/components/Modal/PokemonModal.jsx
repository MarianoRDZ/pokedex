import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../features/pokemon/pokemonModalSlice';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import TypePill from '../TypePill/TypePill';
import {
  Background,
  Modal,
  Title,
  Sprite,
  Pills,
  CloseModal,
  CloseButton,
  Header,
  SpriteContainer,
} from './PokemonModal.styles';

export default function PokemonModal() {
  const dispatch = useDispatch();
  const { isOpen, selectedPokemon } = useSelector(
    (state) => state.pokemonModal
  );

  if (!isOpen || !selectedPokemon) return null;

  return (
    <Background onClick={() => dispatch(closeModal())}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <>
          <Header type={selectedPokemon.types[0].type.name || 'normal'}>
            <CloseModal>
              <CloseButton onClick={() => dispatch(closeModal())}>
                X
              </CloseButton>
            </CloseModal>
            <SpriteContainer>
              <Sprite src={selectedPokemon.sprite} alt={selectedPokemon.name} />
            </SpriteContainer>
            <Title>{selectedPokemon.name}</Title>
          </Header>

          <p>Altura: {selectedPokemon.height}</p>
          <p>Peso: {selectedPokemon.weight}</p>
          <Pills>
            {selectedPokemon.types.map((type) => (
              <TypePill type={type.type} />
            ))}
          </Pills>
        </>
      </Modal>
    </Background>
  );
}
