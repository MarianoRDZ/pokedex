import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
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
  width: 450px;
  height: 500px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${fadeIn} 0.3s ease-out;

  @media (max-width: 768px) {
    max-width: 90%;
    max-height: 80%;
    margin: 20% auto;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    max-height: 85%;
    margin: 15% auto;
    width: 95%;
    height: auto;
  }

  @media (max-height: 600px) {
    max-height: 90vh;
    margin: 5% auto;
  }
`;
