import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(-45deg); }
  50% { transform: rotate(45deg); }
  100% { transform: rotate(-45deg); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
`;

export const LoadingText = styled.h2``;

export const Pokeball = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #fff;
  border: 5px solid #000;
  border-radius: 50%;
  box-shadow: inset -10px 10px 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  animation: ${spin} 4s infinite;
  margin: 20px auto;

  &:before,
  &:after {
    content: '';
    position: absolute;
  }

  &:before {
    background-color: #ef4036;
    width: 100%;
    height: 45%;
  }

  &:after {
    top: calc(50% - 10px);
    width: 100%;
    height: 10px;
    background-color: #000;
  }
`;

export const PokeballButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 10px solid #000;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  z-index: 10;

  &:before {
    content: '';
    position: absolute;
    top: calc(50% - 13px);
    left: calc(50% - 13px);
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 3px solid #000;
    border-radius: 50%;
    z-index: 10;
  }
`;
