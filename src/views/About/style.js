import styled from 'styled-components';
import { Body, BodyItalic, Heading2, Heading4 } from '../../Typography/style';
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

export const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const HeadingTextContainer = styled.div`
  padding-top: 20vh;
  left: 0;
  padding-left: 120px;
  position: absolute;
  z-index: 100;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 6vh;
  }
`;

export const HeadingText = styled(Heading2)``;

export const StyledBreakLine = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.red};
  margin: 12px 16px;
  width: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 8px 16px;
  }
`;

export const ManifestoText = styled(Body)`
  margin-left: 16px;
`;

export const ImageWrapper = styled.div`
  background-image: url(${HeroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: calc(100vh - 200px);
  left: 22vw;
  width: 78vw;
  position: absolute;
  z-index: 10;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 0;
    width: 100%;
    margin-top: 196px;
    background-size: contain;
    background-position: 0 0;
  }
`;

export const QuoteContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.red};
  height: 280px;
  width: 100vw;
  bottom: 0;
  position: absolute;
`;

export const QuoteTextContainer = styled.div`
  width: 100vw;
  bottom: 0;
  height: 200px;
  right: 120px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    right: 24px;
  }
`;

export const QuoteText = styled(Heading4)`
  right: 0;
  margin: 0 36px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0;
  }
`;

export const QuoteAuthor = styled(BodyItalic)`
  right: 0;
`;
