import React, { useEffect } from 'react';
import { getCopy } from './copy';
import { HeadingText, HomeContainer, ImageWrapper } from './style';

export default function Home() {
  useEffect(() => {
    document.title = getCopy.pageTitle;
  }, []);

  return (
    <HomeContainer>
      {/* <HomeInnerContainer> */}
      <HeadingText dangerouslySetInnerHTML={{ __html: getCopy.heading }} />
      {/* <RightColumn> */}
      <ImageWrapper />
      {/* </RightColumn> */}
      {/* </HomeInnerContainer> */}
    </HomeContainer>
  );
}
