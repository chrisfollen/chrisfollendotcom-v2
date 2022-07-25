import styled from 'styled-components';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { Heading1 } from '../../Typography/style';
import HeroImage from '../../assets/placeholder.jpg';

// const slideIn = keyframes`
//     from {
//       margin-left: 100%;
//       width: 300%;
//       opacity: 0;
//     }

//     to {
//       margin-left: 0%;
//       width: 100%;
//       opacity: 1;
//     }
//   `;

// const slideInSmall = keyframes`
//     from {
//       margin-left: 100%;
//       width: 300%;
//       opacity: 0;
//     }

//     to {
//       margin-left: 0%;
//       width: 100%;
//       opacity: 1;
//     }
//   `;

export const HomeContainer = styled(OuterPageContainer)`
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  display: flex;
`;

// export const HomeInnerContainer = styled(OuterPageContainer)`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   background-color: red;
// `;

export const RightColumn = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: green;
  top: 0;
  right: 0;
  position: absolute;
  z-index: 50;
`;

export const HeadingText = styled(Heading1)`
  padding-top: 30vh;
  left: 0;
  padding-left: 120px;
  position: absolute;
  z-index: 100;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 24px;
    padding-top: 13vh;
  }
`;

export const ImageWrapper = styled.div`
  background-image: url(${HeroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: calc(100vh - 160px);
  left: 22vw;
  width: 78vw;
  position: absolute;
  z-index: 10;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 0;
    width: 100%;
    margin-top: 196px;
    background-size: contain;
    background-position: 0 0;
  }
`;

// export const TextContainer = styled.div`
//   padding-left: 2.5rem;
//   padding-bottom: 2rem;

//   @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//     padding-left: 2rem;
//     padding-bottom: 1.5rem;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding-left: 1rem;
//     padding-bottom: 1rem;
//   }
// `;

// export const HomeHeadingBase = styled(Heading1).attrs({ as: 'h2' })`
//   letter-spacing: 0.9rem;
//   line-height: 8rem;
//   color: ${({ theme }) => theme.palette.white};

//   @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//     letter-spacing: 0.6rem;
//     line-height: 7rem;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     letter-spacing: 0.3rem;
//     line-height: 4rem;
//   }
// `;

// export const HomeHeading1 = styled(HomeHeadingBase)`
//     opacity: ${({ homeAnimationHasRun }) => (homeAnimationHasRun ? 1 : 0)};
//     animation: ${({ homeAnimationHasRun }) =>
//       !homeAnimationHasRun &&
//       css`
//         ${slideIn} 3s ease 3s
//       `};
//     };
//     animation-fill-mode: forwards;

//     @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//         animation: ${({ homeAnimationHasRun }) =>
//           !homeAnimationHasRun &&
//           css`
//             ${slideInSmall} 3s ease 3s
//           `};
//         animation-fill-mode: forwards;
//     };
//     }
// `;

// export const HomeHeading2 = styled(HomeHeadingBase)`
//     opacity: ${({ homeAnimationHasRun }) => (homeAnimationHasRun ? 1 : 0)};
//     animation: ${({ homeAnimationHasRun }) =>
//       !homeAnimationHasRun &&
//       css`
//         ${slideIn} 3s ease 4s
//       `};
//     animation-fill-mode: forwards;
// };

//     @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//         animation: ${({ homeAnimationHasRun }) =>
//           !homeAnimationHasRun &&
//           css`
//             ${slideInSmall} 3s ease 4s
//           `};
//         animation-fill-mode: forwards;
//     }
// `;

// export const HomeHeading3 = styled(HomeHeadingBase)`
//     opacity: ${({ homeAnimationHasRun }) => (homeAnimationHasRun ? 1 : 0)};
//     color: ${({ theme }) => theme.palette.white};
//     animation: ${({ homeAnimationHasRun }) =>
//       !homeAnimationHasRun &&
//       css`
//         ${slideIn} 3s ease 5s
//       `};
//     animation-fill-mode: forwards;
// };

//     @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//         animation: ${({ homeAnimationHasRun }) =>
//           !homeAnimationHasRun &&
//           css`
//             ${slideInSmall} 3s ease 5s
//           `};
//         animation-fill-mode: forwards;
//     }
// `;

// export const HomeHeadingLink = styled(Link)`
//   line-height: 7rem;
//   color: ${({ theme }) => theme.palette.green};

//   @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//     letter-spacing: 0.6rem;
//     line-height: 7rem;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     letter-spacing: 0.3rem;
//     line-height: 4rem;
//   }
// `;
