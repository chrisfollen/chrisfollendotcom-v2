import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardWrapper, Date, StyledCardImage, Title } from './style';
import { Body } from '../../../../Typography/style';

export default function ArticleCard({
  image,
  altText,
  title,
  date,
  intro,
  path
}) {
  const introIsString = typeof intro === 'string';

  return (
    <Link to={path}>
      <CardWrapper>
        <StyledCardImage src={image} alt={altText} />
        <Date>{date}</Date>
        <Title>{title}</Title>
        {introIsString ? (
          <Body as="p">{intro}</Body>
        ) : (
          <Body as="p">
            {intro.copy1} {intro.linkText} {intro.copy2}{' '}
          </Body>
        )}
      </CardWrapper>
    </Link>
  );
}

ArticleCard.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  altText: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};
