import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../features/pokemon/pokemonModalSlice';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBody from '../ModalBody/ModalBody';
import { Background, Modal } from './PokemonModal.styles';

export default function PokemonModal() {
  const dispatch = useDispatch();
  const { isOpen, selectedPokemon } = useSelector(
    (state) => state.pokemonModal
  );

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!isOpen || !selectedPokemon) return null;

  return (
    <Background onClick={() => handleClose()}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalHeader
          selectedPokemon={selectedPokemon}
          handleClose={handleClose}
        />
        <ModalBody selectedPokemon={selectedPokemon} />
      </Modal>
    </Background>
  );
}
