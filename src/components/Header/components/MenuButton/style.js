import styled from 'styled-components';
import { Body } from '../../../../Typography/style';

export const MenuTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenuText = styled(Body)`
  color: ${({ menuLightTheme, theme }) =>
    menuLightTheme ? theme.palette.white : theme.palette.black};
`;

export const MenuTextLines = styled(Body)`
  color: ${({ menuLightTheme, theme }) =>
    menuLightTheme ? theme.palette.white : theme.palette.black};
  letter-spacing: 3px;
  font-weight: bold;
  padding-left: 6px;
`;
