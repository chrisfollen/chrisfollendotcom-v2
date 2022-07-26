import React, { useEffect } from 'react';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { getCopy } from './copy';

export default function About() {
  useEffect(() => {
    document.title = getCopy.pageTitle;
  }, []);

  return (
    <OuterPageContainer>
      <div style={{ height: '1500px', backgroundColor: 'blue' }} />
    </OuterPageContainer>
  );
}
