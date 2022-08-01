import styled from 'styled-components';
import { BodyBold, BodyItalic, Heading3 } from '../../../../Typography/style';

export const ListWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const ListHeading = styled(Heading3)`
  margin-bottom: 48px;
  text-align: center;
`;

export const StyledBookList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const StyledListItem = styled.li`
  margin-bottom: 32px;
`;

export const Title = styled(BodyBold)`
  margin: 0 0 8px 0;
  text-align: center;
  display: block;
`;

export const Author = styled(BodyItalic)`
  margin: 0 0 8px 0;
  text-align: center;
  display: block;
`;

export const StyledBreakLine = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.red};
  margin: 120px auto;
  width: 120px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 48px auto;
  }
`;
