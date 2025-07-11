import styled from 'styled-components';

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fefffe;
  border-radius: 0.5rem;
  padding: 1rem;
  height: auto;
  aspect-ratio: 1/1;
  transition: 0.1s ease-out;
  cursor: pointer;
  max-width: 200px;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const PokemonName = styled.h3`
  font-size: 14px;
  font-weight: bold;
  text-transform: capitalize;
  color: #1f2937;
  margin: 0.5rem 0;
`;

export const SpriteContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
`;

export const Sprite = styled.img`
  background: none;
  width: 80px;
  height: 80px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
`;

export const PokemonId = styled.div`
  width: 100%;
  height: 20px;
  font-size: 14px;
  color: #6b7280;
`;

export const PokemonTypes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
  gap: 5px;
`;
