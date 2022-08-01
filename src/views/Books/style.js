import styled from 'styled-components';
import { Heading2, Body } from '../../Typography/style';

export const InnerContainer = styled.div`
  padding: 0 120px;
  width: calc(100% - 2 * 120px);
  max-width: 500px;
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
  margin-bottom: 8px;
`;

export const Description = styled(Body).attrs({ as: 'p' })`
  text-align: center;
`;
