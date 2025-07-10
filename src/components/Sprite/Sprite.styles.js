import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  width: ${({ width }) => width || 80}px;
  height: ${({ height }) => height || 80}px;
  border-radius: 50%;
`;

export const Image = styled.img`
  background: none;
  width: ${({ width }) => width || 80}px;
  height: ${({ height }) => height || 80}px;
`;
