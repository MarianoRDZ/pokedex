import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../features/pokemon/pokemonModalSlice';
import TypePill, { PILL_SIZE } from '../TypePill/TypePill';
import { getPokemonTypes } from '../../utils/utils';
import { convertPokemonIdToThreeDigits } from '../../utils/utils';
import Sprite, { VARIANT } from '../Sprite/Sprite';
import {
  Background,
  Modal,
  Title,
  Pills,
  CloseModal,
  CloseButton,
  Header,
  PokedexNumber,
  Body,
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

          <Body>
            <Pills>
              {getPokemonTypes(selectedPokemon).map((type) => (
                <TypePill type={type.type} size={PILL_SIZE.xl} />
              ))}
            </Pills>
          </Body>
        </>
      </Modal>
    </Background>
  );
}
