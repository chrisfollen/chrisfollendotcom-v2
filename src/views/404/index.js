import React, { useEffect } from 'react';
import {
  HeroText,
  NotFoundContainer,
  InnerNotFoundPageContainer,
  Subheader,
  StyledBody,
  StyledBodyLink
} from './style';
import { getCopy } from './copy';

export default function NotFound() {
  useEffect(() => {
    document.title = getCopy.pageTitle;
  }, []);

  return (
    <NotFoundContainer>
      <InnerNotFoundPageContainer>
        <HeroText>{getCopy.header}</HeroText>
        <Subheader>{getCopy.subheader}</Subheader>
        <StyledBody>{getCopy.bodyCopy1}</StyledBody>
        <StyledBody>
          {getCopy.bodyCopy2}
          <StyledBodyLink to={getCopy.linkPath}>
            {getCopy.linkText}
          </StyledBodyLink>
          {getCopy.bodyCopy3}
        </StyledBody>
      </InnerNotFoundPageContainer>
    </NotFoundContainer>
  );
}
