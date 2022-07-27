import styled from 'styled-components';

export const InnerPageContainer = styled.div`
  padding: 0 120px;
  width: calc(100% - 2 * 120px);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 24px;
    width: calc(100% - 2 * 24px);
  }
`;
