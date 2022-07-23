import React, { useEffect } from 'react';
import { InnerPageContainer } from '../../components/InnerPageContainer/style';
import { getCopy } from './copy';
import { HeadingText, HomeContainer, LeftColumn, RightColumn } from './style';

export default function Home() {
  useEffect(() => {
    document.title = getCopy.pageTitle;
  }, []);

  return (
    <HomeContainer>
      <InnerPageContainer>
        <LeftColumn>
          <HeadingText dangerouslySetInnerHTML={{ __html: getCopy.heading }} />
        </LeftColumn>
        <RightColumn>
          <p>dsjhgs</p>
        </RightColumn>
      </InnerPageContainer>
    </HomeContainer>
  );
}
