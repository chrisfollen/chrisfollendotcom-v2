import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';

import {
  MenuContainer,
  CloseButton,
  CloseButtonText,
  MenuMiddleColumn,
  MenuLeftColumn,
  MenuRightColumn,
  ColumnInnerContainer,
  StyledLinkText,
  MenuOuterContainer
} from './style';
import {
  PATH_ABOUT,
  PATH_JOURNAL,
  PATH_PORTFOLIO
} from '../../constants/paths';
import { getCopy } from './copy';
import ExternalLinks from './components/ExternalLinks';

export default function Menu({ toggleMenu, menuActive }) {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <MenuOuterContainer menuActive={menuActive}>
      <MenuContainer>
        <MenuLeftColumn menuActive={menuActive}>
          {isMobile && (
            <CloseButton onClick={toggleMenu}>
              <CloseButtonText>&times;</CloseButtonText>
            </CloseButton>
          )}
          <ColumnInnerContainer>
            <Link to={PATH_ABOUT} onClick={toggleMenu}>
              <StyledLinkText>{getCopy.about}</StyledLinkText>
            </Link>
          </ColumnInnerContainer>
        </MenuLeftColumn>
        <MenuMiddleColumn menuActive={menuActive}>
          <ColumnInnerContainer>
            <Link to={PATH_PORTFOLIO} onClick={toggleMenu}>
              <StyledLinkText>{getCopy.portfolio}</StyledLinkText>
            </Link>
          </ColumnInnerContainer>
          {!isMobile && <ExternalLinks menuActive={menuActive} />}
        </MenuMiddleColumn>
        <MenuRightColumn menuActive={menuActive}>
          {!isMobile && (
            <CloseButton onClick={toggleMenu}>
              <CloseButtonText>&times;</CloseButtonText>
            </CloseButton>
          )}

          <ColumnInnerContainer>
            <Link to={PATH_JOURNAL} onClick={toggleMenu}>
              <StyledLinkText>{getCopy.journal}</StyledLinkText>
            </Link>
          </ColumnInnerContainer>
        </MenuRightColumn>
        {isMobile && <ExternalLinks menuActive={menuActive} />}
      </MenuContainer>
    </MenuOuterContainer>
  );
}

Menu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuActive: PropTypes.bool.isRequired
};
