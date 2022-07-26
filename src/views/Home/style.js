import styled from 'styled-components';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { Body, Heading1, Title } from '../../Typography/style';
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
  position: fixed;
  display: flex;
`;

export const HeadingText = styled(Heading1)`
  padding-top: 24vh;
  left: 0;
  padding-left: 120px;
  position: absolute;
  z-index: 100;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
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
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 0;
    width: 100%;
    margin-top: 196px;
    background-size: contain;
    background-position: 0 0;
  }
`;

export const NameText = styled(Title)`
  bottom: 0px;
  margin-bottom: 40px;
  right 120px;
  position: absolute;
  z-index: 20;
  text-transform: uppercase;
  line-height: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 58px;
    margin-bottom: 0px;
    right: auto;
    left: 24vw;
  }
`;

export const StyledBodyText = styled(Body)`
  left: 22vw;
  bottom: 0px;
  margin-bottom: 40px;
  position: absolute;
  z-index: 100;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 120px;
    left: 24vw;
    margin-bottom: 0;
  }
`;

export const VerticalLine = styled.div`
  position: absolute;
  border-left: 1px solid ${({ theme }) => theme.palette.red};
  height: 365px;
  left: 19vw;
  bottom: 0px;
  margin-bottom: 46px;
  margin-right: 60px;
  z-index: 80;
`;
