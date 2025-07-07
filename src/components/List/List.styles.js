import styled from 'styled-components';

export const PokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
  width: 100%;
  height: auto;
  background: red;
`;
