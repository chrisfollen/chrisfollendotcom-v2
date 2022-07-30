import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OuterPageContainer } from '../../../../components/OuterPageContainer/style';
import { PageColumn } from '../../../../components/PageColumn/style';
import { content } from './copy';
import Footer from '../../../../components/Footer';
import {
  ArticleBody,
  ArticleDate,
  ArticleContainer,
  ArticleImage,
  ArticleTitle,
  BackLink,
  ArticleSubhead,
  ArticleSection,
  StyledBodyExternalLink
} from '../style';

import { PATH_JOURNAL } from '../../../../constants/paths';

export default function DesignForDevs() {
  useEffect(() => {
    document.title = content.pageTitle;
  }, []);

  return (
    <OuterPageContainer>
      <PageColumn>
        <ArticleContainer>
          <ArticleTitle>{content.title}</ArticleTitle>
          <ArticleDate>{content.date}</ArticleDate>
          <ArticleImage src={content.heroImage} alt={content.imageAltText} />
          <ArticleBody>{content.intro}</ArticleBody>
          {content.resources.map((resource) => (
            <ArticleSection key={resource.heading}>
              <ArticleSubhead>
                <StyledBodyExternalLink href={resource.link}>
                  {resource.heading}
                </StyledBodyExternalLink>
              </ArticleSubhead>
              <ArticleBody
                dangerouslySetInnerHTML={{ __html: resource.body }}
              />
            </ArticleSection>
          ))}
          <BackLink>
            <Link to={PATH_JOURNAL}>{content.backLink}</Link>
          </BackLink>
        </ArticleContainer>
        <Footer />
      </PageColumn>
    </OuterPageContainer>
  );
}
