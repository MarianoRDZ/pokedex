import styled from 'styled-components';
import TYPES from '../../constants/TYPES';
import { darkenHex } from '../../utils/color';

export const Title = styled.h2`
  text-align: center;
  color: #fff;
  text-transform: capitalize;
  font-size: 32px;
`;

export const CloseModal = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  top: 10px;
  right: 10px;
  color: #fff;
`;

export const PokedexNumber = styled.p`
  text-align: center;
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
  background: ${({ type }) => {
    const base = TYPES[type.toUpperCase()]?.color || 'gray';
    const darker = darkenHex(base, 60);
    return `linear-gradient(to right bottom, ${base}, ${darker})`;
  }};
`;
