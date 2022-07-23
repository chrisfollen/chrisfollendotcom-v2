import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery, useTheme } from '@mui/material';
import { MenuText, MenuTextLines, MenuTextContainer } from './style';

export default function MenuButton({ toggleMenu, menuLightTheme }) {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <button type="button" aria-label="Menu" onClick={toggleMenu}>
      <MenuTextContainer>
        {!isMobile && <MenuText menuLightTheme={menuLightTheme}>menu</MenuText>}
        <MenuTextLines menuLightTheme={menuLightTheme}>|||</MenuTextLines>
      </MenuTextContainer>
    </button>
  );
}

MenuButton.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuLightTheme: PropTypes.bool.isRequired
};
