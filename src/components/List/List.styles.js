import styled from 'styled-components';

export const PokemonList = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  background: #eff2fe;
  justify-items: center;
`;
