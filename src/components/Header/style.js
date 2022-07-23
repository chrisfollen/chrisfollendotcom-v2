import styled from 'styled-components';

export const HeaderOuterContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

export const HeaderInnerContainer = styled.div`
  width: 86%;
  position: relative;
  padding: 48px 0;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px 0;
  }
`;

export const HeaderMenuContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;

export const StyledLogo = styled.img`
  width: 48px;
  height: 48px;
`;
