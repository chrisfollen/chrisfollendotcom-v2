import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Body, BodyItalic, Category, Heading2 } from '../../Typography/style';

export const HeadingContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.lightGrey};
  padding: 188px 120px 36px;
  width: calc(100vw - 2 * 120px);
  text-align: right;
  margin-bottom: 160px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 120px 24px 24px;
    width: calc(100vw - 2 * 24px);
    text-align: center;
    margin-bottom: 32px;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  margin-bottom: 88px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 32px;
  }
`;

export const StyledBreakLine = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.red};
  margin: 32px 0px;
  width: 700px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: calc(100vw - 2 * 24px);
  }
`;

export const StyledBodyExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'noreferrer'
})`
  padding: 2px 0;
  border-bottom: 2px solid ${({ theme }) => theme.palette.red};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.palette.lightRed};
  }
`;

export const LowSubheader = styled(BodyItalic)`
  margin-top: 12px;
  margin-bottom: 64px;
`;

export const ProjectContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  margin-bottom: 190px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    margin-bottom: 64px;
  }
`;

export const ProjectContainerRight = styled(ProjectContainer)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column-reverse;
  }
`;

export const ProjectTextContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  z-index: 200;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    max-width: 500px;
    margin-bottom: 32px;
  }
`;

export const ProjectHeading = styled(Heading2).attrs({ as: 'h3' })``;

export const ProjectHeadingRight = styled(ProjectHeading)`
  width: 400px;
  text-align: right;
  align-self: flex-end;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 300px;
    text-align: left;
    align-self: flex-start;
  }
`;

export const ProjectBreakLine = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.red};
  margin: 8px 24px;
  width: 32px;
`;

export const ProjectTitle = styled(Category)`
  margin-left: 24px;
  margin-bottom: 4px;
`;

export const ProjectDescription = styled(Body).attrs({ as: 'p' })`
  margin-left: 24px;
`;

export const ProjectImageContainer = styled.div`
  width: 75%;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
`;
