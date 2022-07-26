import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuButton from './components/MenuButton';
import {
  HeaderOuterContainer,
  HeaderInnerContainer,
  HeaderMenuContainer,
  StyledLogo
} from './style';
import logo from '../../assets/logo.png';
import { PATH_ROOT } from '../../constants/paths';

export default function Header({ menuActive, toggleMenu, menuThemeLight }) {
  return (
    <HeaderOuterContainer>
      <HeaderInnerContainer>
        <Link to={PATH_ROOT}>
          <StyledLogo src={logo} />
        </Link>
        <HeaderMenuContainer>
          <MenuButton
            toggleMenu={toggleMenu}
            menuActive={menuActive}
            menuLightTheme={menuThemeLight}
          />
        </HeaderMenuContainer>
      </HeaderInnerContainer>
    </HeaderOuterContainer>
  );
}

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuActive: PropTypes.bool.isRequired,
  menuThemeLight: PropTypes.bool.isRequired
};
