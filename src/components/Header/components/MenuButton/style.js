import styled from 'styled-components';
import { Body } from '../../../../Typography/style';

export const MenuTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenuText = styled(Body)`
  color: ${({ menuLightTheme, theme }) =>
    menuLightTheme ? theme.palette.white : theme.palette.black};
  opacity: ${({ menuActive }) => (menuActive ? 0 : 1)};
`;

export const MenuTextLines = styled(Body)`
  color: ${({ menuLightTheme, theme }) =>
    menuLightTheme ? theme.palette.white : theme.palette.black};
  opacity: ${({ menuActive }) => (menuActive ? 0 : 1)};
  letter-spacing: 3px;
  font-weight: bold;
  padding-left: 6px;
`;
