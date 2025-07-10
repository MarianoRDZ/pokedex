import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 1rem;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StatName = styled.p`
  color: #374151;
  text-transform: uppercase;
`;

export const StatValue = styled.p`
  color: #374151;
  font-weight: bold;
`;

export const StatBar = styled.div`
  width: 100%;
  background: gray;
`;
