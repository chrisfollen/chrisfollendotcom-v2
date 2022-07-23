import React, { useEffect } from 'react';
import { InnerPageContainer } from '../../components/InnerPageContainer/style';
import { Heading1 } from '../../Typography/style';
import { getCopy } from './copy';
import { HomeContainer } from './style';

export default function Home() {
  useEffect(() => {
    document.title = getCopy.pageTitle;
  }, []);

  return (
    <HomeContainer>
      <InnerPageContainer>
        <Heading1 dangerouslySetInnerHTML={{ __html: getCopy.heading }} />
      </InnerPageContainer>
    </HomeContainer>
  );
}
