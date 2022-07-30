import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { Category, Subhead } from '../../../../Typography/style';

export const CardWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }

  &:hover {
    transition: 0.3s all ease;
    opacity: 0.5;
  }
`;

export const StyledCardImage = styled.img`
  width: 100%;
`;

export const Title = styled(Subhead)`
  margin: -2px 0 4px 0;
`;

export const Date = styled(Category)`
  margin: 8px 0;
`;

// export const TitleLink = styled(Link)`
//   transition: all 0.3s ease;
//   &:hover {
//     background-color: ${({ theme }) => theme.palette.lightRed};
//   }
// `;
