import styled from 'styled-components';
import TYPES from '../../constants/TYPES';

export const Pill = styled.div`
  width: 70px;
  height: 15px;
  background-color: ${({ type }) => TYPES[type.toUpperCase()]?.color || 'gray'};
  text-align: center;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 20px;
`;

export const TypeName = styled.p`
  font-size: 14px;
  margin: 0 auto;
  text-transform: uppercase;
`;
