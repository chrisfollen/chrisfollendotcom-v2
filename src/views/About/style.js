import styled from 'styled-components';
import {
  Body,
  BodyItalic,
  Heading2,
  Heading3,
  Heading4
} from '../../Typography/style';
import HeroImage from '../../assets/placeholder.jpg';

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
    padding-top: 13vh;
  }
`;

export const HeadingText = styled(Heading2)``;

export const StyledBreakLineBase = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.red};
`;

export const StyledBreakLine = styled(StyledBreakLineBase)`
  margin: 12px 16px;
  width: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 8px 16px;
  }
`;

export const ManifestoText = styled(Body)`
  margin-left: 16px;
`;

export const HeroImageWrapper = styled.div`
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
    margin-top: 38vh;
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
  width: calc(100vw-120px);
  text-align: right;
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
    width: calc(100vw-24px);
  }
`;

export const QuoteText = styled(Heading4)`
  right: 0;
  margin: 0 36px 0 0;
  white-space: normal;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0;
  }
`;

export const QuoteAuthor = styled(BodyItalic)`
  right: 0;
`;

export const AboutChrisContainer = styled.div`
  max-width: 800px;
  margin: 120px auto;
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 88px auto;
    flex-direction: column-reverse;
  }
`;

export const AboutChrisPhoto = styled.img`
  width: 60%;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 80%;
    margin-top: -60px;
    margin-left: 20%;
  }
`;

export const AboutChrisTextContainer = styled.div`
  width: 60%;
  z-index: 150;
  margin-top: 120px;
  margin-left: -160px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
  }
`;

export const AboutChrisHeading = styled(Heading3)`
  margin-bottom: 6px;
`;

export const HobbiesContainer = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HobbiesTitleContainer = styled.div`
  margin-bottom: 6px;
`;

export const StyledBreakLineNoMargin = styled(StyledBreakLineBase)`
  margin: 6px 0;
  width: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0;
  }
`;
