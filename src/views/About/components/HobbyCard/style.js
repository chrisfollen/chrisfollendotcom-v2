import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Subhead } from '../../../../Typography/style';

export const CardWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const StyledCardImage = styled.img`
  width: 100%;
`;

export const Title = styled(Subhead)`
  margin: 16px 0 4px 0;
`;

export const StyledBodyLink = styled(Link)`
  padding: 2px 0;
  border-bottom: 2px solid ${({ theme }) => theme.palette.red};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.palette.lightRed};
  }
`;
