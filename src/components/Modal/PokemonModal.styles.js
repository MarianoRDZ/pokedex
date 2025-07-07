import styled from 'styled-components';
import TYPES from '../../constants/TYPES';
import { darkenHex } from '../../utils/color';

export const CloseModal = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px 10px 0 0;
  background: ${({ type }) => {
    const base = TYPES[type.toUpperCase()]?.color || 'gray';
    const darker = darkenHex(base, 20);
    return `linear-gradient(to bottom, ${base}, ${darker})`;
  }};
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
`;

export const Modal = styled.div`
  background: white;
  margin: 10% auto;
  max-width: 500px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  color: #fff;
  text-transform: capitalize;
  font-size: 32px;
`;

export const SpriteContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Sprite = styled.img`
  background: none;
  height: 250px;
  width: 250px;
  image-rendering: pixelated;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
`;

export const Pills = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
