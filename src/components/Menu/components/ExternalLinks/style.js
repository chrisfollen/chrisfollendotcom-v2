import styled from 'styled-components';

export const ExternalLinksOuterContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-color: ${({ theme }) => theme.palette.lightGrey};
    transition: transform 0.8s ease;
    transform: ${({ menuActive }) =>
      menuActive ? 'translateY(0)' : 'translateY(100%)'};
    padding: 0;
    height: 72px;
  }
`;

export const ExternalLinksInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ExternalLink = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 18px;
  &:hover {
    transition: 0.3s all ease;
    opacity: 0.5;
  }
`;
