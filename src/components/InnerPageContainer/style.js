import styled from 'styled-components';

export const InnerPageContainer = styled.div`
  padding: 0 120px;
  width: calc(100% - 2 * 120px);
  display: flex;
  margin: auto;
  overflow: auto;
  margin-top: 147px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 90px;
  }
`;
