import styled from 'styled-components';
import { Body } from '../../../../Typography/style';

export const PhotoModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 20px;
  position: fixed;
  z-index: 3000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.white};
  overflow: auto;
  transition: transform 0.6s ease;
  transform: ${({ modalActive }) =>
    modalActive ? 'translateY(0)' : 'translateY(-100%)'};
`;

export const CloseButtonWrapper = styled.button.attrs({
  ariaLabel: 'Close Modal'
})`
  color: ${({ theme }) => theme.palette.black};
  position: absolute;
  right: 0;
  margin-right: 120px;
  top: 0;
  margin-top: 58px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-right: 24px;
    margin-top: 30px;
  }
`;

export const CloseButton = styled(Body)`
  color: ${({ theme }) => theme.palette.black};
  font-size: 54px;
`;

export const Photo = styled.img`
  max-width: 90%;
  max-height: 90%;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
