import { getPokemonTypes } from '../../utils/utils';
import TypePill from '../TypePill/TypePill';
import Stats from '../Stats/Stats.jsx';
import { Body, Pills, StatsContainer } from './ModalBody.styles.js';

const ModalBody = ({ selectedPokemon }) => (
  <Body>
    <Pills>
      {getPokemonTypes(selectedPokemon).map((type, index) => (
        <TypePill key={index} type={type.type} size={'xl'} />
      ))}
    </Pills>

    <StatsContainer>
      {Object.values(selectedPokemon.stats).map((stat, index) => {
        return (
          <Stats
            key={index}
            name={stat.stat.name}
            value={stat.base_stat}
            type={selectedPokemon.types[0].type}
          />
        );
      })}
    </StatsContainer>
  </Body>
);

export default ModalBody;
