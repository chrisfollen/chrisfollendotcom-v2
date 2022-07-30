import styled from 'styled-components';
import HeroImage from '../../assets/journal.jpg';
import { Body, Heading2 } from '../../Typography/style';

export const HeadingContainer = styled.div`
  background-image: url(${HeroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 400px;
  margin-bottom: 160px;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 88px;
    height: 300px;
  }
`;

export const HeadingTextContainer = styled.div`
  margin-left: 120px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-left: 24px;
  }
`;

export const StyledHeading = styled(Heading2)``;

export const StyledBody = styled(Body)`
  margin-left: 32px;
`;

export const StyledBreakLine = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.red};
  margin: 0 0 8px 32px;
  width: 64px;
`;

export const ArticlesContainer = styled.div`
  margin-bottom: 160px;
`;
