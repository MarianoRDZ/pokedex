import styled from 'styled-components';

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  height: 200px;
  border: 1px solid gray;
`;

export const Name = styled.p`
  font-size: 14px;
  color: red;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background: black;
`;

export const SpriteContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Sprite = styled.img`
  background: none;
  image-rendering: pixelated;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
`;
