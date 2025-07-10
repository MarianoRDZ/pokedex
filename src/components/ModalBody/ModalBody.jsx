import { getPokemonTypes } from '../../utils/utils';
import TypePill, { PILL_SIZE } from '../TypePill/TypePill';

import { Body, Pills } from './ModalBody.styles.js';

const ModalBody = ({ selectedPokemon }) => (
  <Body>
    <Pills>
      {getPokemonTypes(selectedPokemon).map((type) => (
        <TypePill type={type.type} size={PILL_SIZE.xl} />
      ))}
    </Pills>
  </Body>
);

export default ModalBody;
