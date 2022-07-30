import styled from 'styled-components';
import { BodyBoldItalic } from '../../Typography/style';

export const FooterOuterContainer = styled.div`
  z-index: 200;
  padding: 48px 120px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.palette.lightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterInnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column-reverse;
  }
`;

export const ExternalLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 24px;
  }
`;

export const ExternalLink = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 18px;
  &:hover {
    opacity: 0.5;
  }
`;

export const FooterText = styled(BodyBoldItalic)`
  text-align: center;
`;
