import styled from 'styled-components';
import { Body, Title } from '../../Typography/style';
import PlaceholderImage from '../../assets/placeholder2.jpg';

export const MenuOuterContainer = styled.nav`
  position: fixed;
  left: ${({ menuVisable }) => (menuVisable ? 0 : '-500vw')};;
  top: 0
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;

export const MenuContainer = styled.nav`
  display: flex;
  width: 100vw;
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    height: calc(100vh - 72px);
  }
`;

export const MenuColumnBase = styled.div`
  flex-grow: 1;
  transition: transform 0.8s ease;
`;

export const MenuLeftColumn = styled(MenuColumnBase)`
  background-image: url(${PlaceholderImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: ${({ menuActive }) =>
    menuActive ? 'translateY(0)' : 'translateY(100%)'};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    transform: ${({ menuActive }) =>
      menuActive ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

export const MenuMiddleColumn = styled(MenuColumnBase)`
  background-image: url(${PlaceholderImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: ${({ menuActive }) =>
    menuActive ? 'translateY(0)' : 'translateY(-100%)'};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    transform: ${({ menuActive }) =>
      menuActive ? 'translateX(0)' : 'translateX(100%)'};
  }
`;

export const MenuRightColumn = styled(MenuColumnBase)`
  background-image: url(${PlaceholderImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: ${({ menuActive }) =>
    menuActive ? 'translateY(0)' : 'translateY(100%)'};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    transform: ${({ menuActive }) =>
      menuActive ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

export const ColumnInnerContainer = styled(MenuColumnBase)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button.attrs({ ariaLabel: 'Close Menu' })`
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

export const CloseButtonText = styled(Body)`
  color: ${({ theme }) => theme.palette.white};
  font-size: 54px;
`;

export const ExternalLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 2rem;
  }
`;

export const StyledLinkText = styled(Title)`
  color: ${({ theme }) => theme.palette.white};
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
