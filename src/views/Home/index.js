import React, { useEffect } from 'react';
import { getCopy } from './copy';
import {
  HeadingText,
  HomeContainer,
  ImageWrapper,
  NameText,
  StyledBodyText,
  VerticalLine
} from './style';

export default function Home() {
  useEffect(() => {
    document.title = getCopy.pageTitle;
  }, []);

  return (
    <HomeContainer>
      <HeadingText dangerouslySetInnerHTML={{ __html: getCopy.heading }} />
      <ImageWrapper />
      <StyledBodyText dangerouslySetInnerHTML={{ __html: getCopy.aboutText }} />
      <NameText>{getCopy.name}</NameText>
      <VerticalLine />
    </HomeContainer>
  );
}
