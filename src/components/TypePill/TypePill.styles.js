import styled from 'styled-components';
import TYPES from '../../constants/TYPES';

export const Pill = styled.div`
  height: 20px;
  background-color: ${({ type }) => TYPES[type.toUpperCase()]?.color || 'gray'};
  text-align: center;
  border-radius: 20px;
`;

export const TypeName = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
  padding: 2px 8px;
`;
