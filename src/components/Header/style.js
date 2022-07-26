import styled from 'styled-components';

export const HeaderOuterContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 900;
`;

export const HeaderInnerContainer = styled.div`
  padding: 48px 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px 24px;
  }
`;

export const HeaderMenuContainer = styled.div``;

export const StyledLogo = styled.img`
  width: 48px;
  height: 48px;
`;
