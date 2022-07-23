import styled from 'styled-components';

export const InnerPageContainer = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow: auto;
  margin-top: 147px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 90px;
  }
`;
