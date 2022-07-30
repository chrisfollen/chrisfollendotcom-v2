import styled from 'styled-components';
import { Body, Category, Heading3, Subhead } from '../../../Typography/style';

export const ArticleContainer = styled.div`
  padding: 0 120px;
  width: calc(100% - 2 * 120px);
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 180px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 24px;
    width: calc(100% - 2 * 24px);
  }
`;

export const ArticleDate = styled(Category)`
  margin-bottom: 16px;
  padding-left: 6px;
  width: 100%;
`;

export const ArticleTitle = styled(Heading3).attrs({ as: 'h2' })`
  width: 100%;
`;

export const ArticleImage = styled.img`
  width: 100%;
  margin-bottom: 32px;
`;

export const ArticleSubhead = styled(Subhead)`
  margin-top: 32px;
  margin-bottom: 8px;
  display: block;
`;

export const ArticleBody = styled(Body).attrs({ as: 'p' })`
  margin-bottom: 32px;
  width: 100%;
`;

export const ArticleNumberedList = styled.ol`
  margin: 0;
  padding: 0 0 0 16px;
  width: calc(100% - 16px);
  list-style-type: decimal;
`;

export const ArticleListItem = styled(Body).attrs({ as: 'li' })`
  margin-bottom: 32px;
`;

export const ArticleSection = styled.div`
  width: 100%;
`;

export const StyledBodyExternalLink = styled.a`
  padding: 2px 0;
  border-bottom: 2px solid ${({ theme }) => theme.palette.red};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.palette.lightRed};
  }
`;

export const BackLink = styled(Category)`
  margin: 64px auto 0;
  padding: 2px 0;
  border-bottom: 2px solid ${({ theme }) => theme.palette.red};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.palette.lightRed};
  }
`;
