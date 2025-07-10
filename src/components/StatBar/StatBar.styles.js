import styled from 'styled-components';
import TYPES from '../../constants/TYPES';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Bar = styled.div`
  width: ${({ width }) => width}%;
  height: 10px;
  background: #e5e7eb;
  border-radius: 0 10px 10px 0;
`;

export const FilledBar = styled.div`
  width: ${({ width }) => width}%;
  height: 10px;
  border-radius: 10px 0 0 10px;
  background: ${({ type }) => TYPES[type.toUpperCase()]?.color || 'gray'};
`;
