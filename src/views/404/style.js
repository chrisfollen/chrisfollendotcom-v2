import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Body, Heading2, Subhead } from '../../Typography/style';
import HeroImage from '../../assets/404.jpg';

export const NotFoundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4000;
  background-image: url(${HeroImage});
  width: 100%;
  height: 100%;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InnerNotFoundPageContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 85%;
  }
`;

export const HeroText = styled(Heading2)`
  text-align: center;
  color: ${({ theme }) => theme.palette.white};
`;

export const Subheader = styled(Subhead)`
  text-align: center;
  margin: 4px 0;
  color: ${({ theme }) => theme.palette.white};
`;

export const StyledBody = styled(Body)`
  text-align: center;
  color: ${({ theme }) => theme.palette.white};
`;

export const StyledBodyLink = styled(Link)`
  padding: 2px 0;
  border-bottom: 2px solid ${({ theme }) => theme.palette.red};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.palette.lightRed};
  }
`;
