import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
    from {
        opacity: 1;
    }

    50% {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
`;

export const Loader = styled.div`
  z-index: 5000;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s linear;
  background-color: ${({ theme }) => theme.palette.white};
  animation: ${fadeOut} 1s ease;
  animation-fill-mode: forwards;
`;
