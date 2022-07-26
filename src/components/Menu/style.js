import styled from 'styled-components';
import { Body, Heading3 } from '../../Typography/style';

// const slideInLeft = keyframes `
//     from {
//       margin-left: -100%;
//       opacity: 0;
//     }

//     to {
//       margin-left: 0%;
//       opacity: 1;
//     }
//   `

//   const slideInUp = keyframes `
//     from {
//       margin-bottom: -100%;
//       opacity: 0;
//     }

//     to {
//       margin-bottom: 0%;
//       opacity: 1;
//     }
//   `

// export const MenuContainer = styled.nav`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   position: fixed;
//   z-index: 2000;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   background-color: ${({ theme }) => theme.palette.grey};
//   transition: transform 0.6s ease;
//   transform: ${({ menuActive }) =>
//     menuActive ? 'translateX(0)' : 'translateX(100%)'};
// `;

// export const CloseButtonContainer = styled.div`
//   width: 92%;
//   height: 6rem;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
// `;

// export const InternalLinksContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   margin-bottom: 5rem;
// `;

// export const ExternalLinksContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   margin-bottom: 5rem;

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     margin-bottom: 2rem;
//   }
// `;

// export const CloseButton = styled.button.attrs({ ariaLabel: 'Close Menu' })`
//   color: ${({ theme }) => theme.palette.black};
// `;

// export const InternalLinkBase = styled(Heading3)`
//   letter-spacing: 0.9rem;
//   padding-top: 2rem;
//   padding-bottom: 2rem;

//   @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//     letter-spacing: 0.6rem;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     letter-spacing: 0.3rem;
//   }
// `;

// export const InternalLink1 = styled(InternalLinkBase)`
//   opacity: ${({ menuItemsVisable }) => (menuItemsVisable ? 1 : 0)};
//   animation: ${({ menuActive }) =>
//     menuActive &&
//     css`
//       ${slideInLeft} .8s ease-in .3s
//     `};
//   animation-fill-mode: forwards;
// `;

// export const InternalLink2 = styled(InternalLinkBase)`
//   opacity: ${({ menuItemsVisable }) => (menuItemsVisable ? 1 : 0)};
//   animation: ${({ menuActive }) =>
//     menuActive &&
//     css`
//       ${slideInLeft} .8s ease-in .5s
//     `};
//   animation-fill-mode: forwards;
// `;

// export const InternalLink3 = styled(InternalLinkBase)`
//   opacity: ${({ menuItemsVisable }) => (menuItemsVisable ? 1 : 0)};
//   animation: ${({ menuActive }) =>
//     menuActive &&
//     css`
//       ${slideInLeft} .8s ease-in .7s
//     `};
//   animation-fill-mode: forwards;
// `;

// export const ExternalLink = styled.img`
//   width: 30px;
//   height: 30px;
//   padding: 18px;
//   opacity: ${({ menuItemsVisable }) => (menuItemsVisable ? 1 : 0)};
//   animation: ${({ menuActive }) =>
//     menuActive &&
//     css`
//       ${slideInUp} .8s ease-in .9s
//     `};
//   animation-fill-mode: forwards;
// `;

export const MenuContainer = styled.nav`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 900;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

// export const MenuHeaderContainer = styled.div`
//   position: absolute;
//   top: 0;
//   width: calc(100% - 2 * 120px);
//   z-index: 1000;
//   padding: 48px 120px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   align-items: center;

//   @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//     padding: 20px 24px;
//     width: calc(100% - 2 * 24px);
//   }
// `;

export const MenuColumnBase = styled.div`
  flex-grow: 1;
  transition: transform 0.8s ease;
`;

export const MenuLeftColumn = styled(MenuColumnBase)`
  background-color: red;
  transform: ${({ menuActive }) =>
    menuActive ? 'translateY(0)' : 'translateY(100%)'};
`;

export const MenuMiddleColumn = styled(MenuColumnBase)`
  background-color: blue;
  transform: ${({ menuActive }) =>
    menuActive ? 'translateY(0)' : 'translateY(-100%)'};
`;

export const MenuRightColumn = styled(MenuColumnBase)`
  background-color: yellow;
  transform: ${({ menuActive }) =>
    menuActive ? 'translateY(0)' : 'translateY(100%)'};
`;

export const ColumnInnerContainer = styled(MenuColumnBase)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const InternalLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5rem;
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

export const CloseButton = styled.button.attrs({ ariaLabel: 'Close Menu' })`
  color: ${({ theme }) => theme.palette.black};
  background-color: blue;
  position: absolute;
  right: 0;
  margin-right: 120px;
  top: 0;
  margin-top: 58px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-right: 24px;
    margin-top: 30px;
  }
`;

export const CloseButtonText = styled(Body)`
  color: ${({ theme }) => theme.palette.white};
  font-size: 54px;
`;

export const InternalLinkBase = styled(Heading3)`
  letter-spacing: 0.9rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    letter-spacing: 0.6rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    letter-spacing: 0.3rem;
  }
`;
