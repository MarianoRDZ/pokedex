import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../features/pokemon/pokemonModalSlice.js';
import { Background, Modal } from './PokemonModal.styles.js';

const PokemonModal = ({ children }) => {
  const dispatch = useDispatch();
  const { isOpen, selectedPokemon } = useSelector(
    (state) => state.pokemonModal
  );

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!isOpen || !selectedPokemon) return null;

  return (
    <Background onClick={handleClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            selectedPokemon,
            handleClose,
          })
        )}
      </Modal>
    </Background>
  );
};

export default PokemonModal;

import ModalHeader from './ModalHeader.jsx';
import ModalBody from './ModalBody.jsx';

PokemonModal.Header = ModalHeader;
PokemonModal.Body = ModalBody;
