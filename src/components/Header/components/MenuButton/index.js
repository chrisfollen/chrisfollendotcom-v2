import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { MenuText, MenuTextLines, MenuTextContainer } from './style';
import { PATH_ROOT } from '../../../../constants/paths';

export default function MenuButton({ toggleMenu }) {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const { pathname } = useLocation();

  const menuLightTheme = useMemo(() => {
    if (pathname === PATH_ROOT && !isMobile) {
      return true;
    }
    return false;
  }, [pathname, isMobile]);

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
  toggleMenu: PropTypes.func.isRequired
};
