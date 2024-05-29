import styled from 'styled-components';
import {
  Body,
  BodyItalic,
  Category,
  Heading3
} from '../../../../Typography/style';

export const ResumeOuterContainer = styled.div`
  margin: 160px auto;
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    flex-direction: column;
    margin: 120px 0;
  }
`;

export const ResumeTitle = styled(Category)`
  writing-mode: vertical-rl;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    writing-mode: unset;
  }
`;

export const VerticalLine = styled.div`
  border-left: 1px solid ${({ theme }) => theme.palette.red};
  height: 960px;
  margin: 0 32px 0 16px;
`;

export const ResumeInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 24px 0;
  }
`;

export const ResumeHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin-bottom: 64px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 24px;
  }
`;

export const ResumeColumnsContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const ResumeLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const ResumeRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding-left: 0px;
  }
`;

export const ExperienceContainer = styled.div`
  margin-bottom: 24px;
  max-width: 450px;
`;

export const ExperienceHeader = styled(Category)`
  margin-bottom: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 24px;
  }
`;

export const ExperienceHeaderWithTopMargin = styled(ExperienceHeader)`
  margin-bottom: 8px;
  margin-top: 32px;
`;

export const HeroHeader = styled(Heading3)`
  margin-bottom: 6px;
`;

export const HeroSubheader = styled(BodyItalic)``;

export const HeroBody = styled(Body).attrs({ as: 'p' })`
  margin-bottom: 6px;
`;

export const StyledBreakLine = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.red};
  width: 100%;
  margin: 6px 0;
`;

export const StyledBody = styled(Body)`
  display: block;
`;
