import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { InnerPageContainer } from '../../components/InnerPageContainer/style';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { PageColumn } from '../../components/PageColumn/style';
import { content } from './copy';
import {
  HeadingContainer,
  StyledHeading,
  StyledBody,
  HeadingTextContainer,
  StyledBreakLine,
  ArticlesContainer
} from './style';

import Footer from '../../components/Footer';
import ArticleCard from './components/ArticleCard';

export default function Journal() {
  useEffect(() => {
    document.title = content.pageTitle;
  }, []);

  return (
    <OuterPageContainer>
      <PageColumn>
        <HeadingContainer>
          <HeadingTextContainer>
            <StyledHeading>{content.heading}</StyledHeading>
            <StyledBreakLine />
            <StyledBody>{content.subheading}</StyledBody>
          </HeadingTextContainer>
        </HeadingContainer>
        <InnerPageContainer>
          <ArticlesContainer>
            <Grid
              container
              columnSpacing={6}
              rowSpacing={8}
              alignItems="stretch"
            >
              {content.articles.map((article) => (
                <Grid item key={article.title} sm={4}>
                  <ArticleCard
                    image={article.thumbnail}
                    altText={article.thumbnailAlt}
                    title={article.title}
                    date={article.date}
                    intro={article.intro}
                    path={article.path}
                  />
                </Grid>
              ))}
            </Grid>
          </ArticlesContainer>
        </InnerPageContainer>

        <Footer />
      </PageColumn>
    </OuterPageContainer>
  );
}
