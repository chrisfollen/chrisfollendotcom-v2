import styled from 'styled-components';
import { Heading2, Body, BodyBold, BodyItalic } from '../../Typography/style';

export const InnerContainer = styled.div`
  padding: 0 120px;
  width: calc(100% - 2 * 120px);
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 180px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 24px;
    width: calc(100% - 2 * 24px);
    margin: 140px auto;
  }
`;

export const Heading = styled(Heading2)`
  text-align: center;
  margin-bottom: 36px;
`;

export const Description = styled(Body)`
  text-align: center;
`;

export const DescriptionEmphasized = styled(BodyBold)`
  text-align: center;
`;

export const StyledBookList = styled.ul`
  margin: 36px 0 0 0;
  padding: 0;
  list-style-type: none;
`;

export const StyledListItem = styled.li`
  margin-bottom: 24px;
`;

export const Title = styled(BodyBold)`
  margin: 0;
  text-align: center;
  display: block;
`;

export const Author = styled(BodyItalic)`
  margin: 0;
  text-align: center;
  display: block;
`;
