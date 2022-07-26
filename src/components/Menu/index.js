import React from 'react';
import PropTypes from 'prop-types';

import {
  MenuContainer,
  CloseButton,
  CloseButtonText,
  MenuMiddleColumn,
  MenuLeftColumn,
  MenuRightColumn,
  ColumnInnerContainer
} from './style';

export default function Menu({ toggleMenu, menuActive }) {
  return (
    <MenuContainer>
      <MenuLeftColumn menuActive={menuActive}>
        <ColumnInnerContainer>
          <p>test</p>
        </ColumnInnerContainer>
      </MenuLeftColumn>
      <MenuMiddleColumn menuActive={menuActive}>
        <ColumnInnerContainer>
          <p>test</p>
        </ColumnInnerContainer>
      </MenuMiddleColumn>
      <MenuRightColumn menuActive={menuActive}>
        <CloseButton onClick={toggleMenu}>
          <CloseButtonText>&times;</CloseButtonText>
        </CloseButton>
        <ColumnInnerContainer>
          <p>test</p>
        </ColumnInnerContainer>
      </MenuRightColumn>

      {/* <InternalLinksContainer>
                <Link onClick={handleLinkClick} to='/dev'><InternalLink1 menuItemsVisable={menuItemsVisable} menuActive={menuActive}>dev</InternalLink1></Link>
                <Link onClick={handleLinkClick} to='/photo'><InternalLink2 menuItemsVisable={menuItemsVisable} menuActive={menuActive}>photo</InternalLink2></Link>
                <Link onClick={handleLinkClick} to='/about'><InternalLink3 menuItemsVisable={menuItemsVisable}menuActive={menuActive}>about</InternalLink3></Link>
            </InternalLinksContainer> */}

      {/* <ExternalLinksContainer>
                <a href="mailto:chris@chrisfollen.com" target="_blank" rel="noreferrer"><ExternalLink menuItemsVisable={menuItemsVisable} menuActive={menuActive}  src={EMAIL_ICON_SRC} alt='Email icon'/></a>
                <a href="https://www.linkedin.com/in/chrisfollen/" target="_blank" rel="noreferrer"><ExternalLink menuItemsVisable={menuItemsVisable} menuActive={menuActive} src={LINKED_IN_ICON_SRC} alt='LinkedIn logo'/></a>
                <a href="https://github.com/chrisfollen" target="_blank" rel="noreferrer"><ExternalLink menuItemsVisable={menuItemsVisable} menuActive={menuActive} src={GITHUB_ICON_SRC} alt='GitHub logo' /></a>
            </ExternalLinksContainer> */}
    </MenuContainer>
  );
}

Menu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuActive: PropTypes.bool.isRequired
};
