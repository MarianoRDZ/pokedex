import styled from 'styled-components';
import TYPES from '../../constants/TYPES';

export const Pill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => (size === 'sm' ? '20px' : '30px')};
  background-color: ${({ type }) => TYPES[type.toUpperCase()]?.color || 'gray'};
  border-radius: 15px;
`;

export const TypeName = styled.p`
  font-size: ${({ size }) => (size === 'sm' ? '0.75rem' : '1rem')};
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
  padding: 2px 8px;
`;
