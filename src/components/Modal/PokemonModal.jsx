import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../features/pokemon/pokemonDetailsSlice';
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
  const { isOpen, status, data, error } = useSelector(
    (state) => state.pokemonDetails
  );

  if (!isOpen) return null;

  return (
    <Background onClick={() => dispatch(closeModal())}>
      <Modal onClick={(e) => e.stopPropagation()}>
        {status === 'loading' && <Loading />}
        {status === 'failed' && <Error error={error} />}
        {status === 'succeeded' && data && (
          <>
            <Header type={data?.types[0].type.name || 'normal'}>
              <CloseModal>
                <CloseButton onClick={() => dispatch(closeModal())}>
                  X
                </CloseButton>
              </CloseModal>
              <SpriteContainer>
                <Sprite src={data.sprite} alt={data.name} />
              </SpriteContainer>
              <Title>{data.name}</Title>
            </Header>

            <p>Altura: {data.height}</p>
            <p>Peso: {data.weight}</p>
            <Pills>
              {data.types.map((type) => (
                <TypePill type={type.type} />
              ))}
            </Pills>
          </>
        )}
      </Modal>
    </Background>
  );
}
