import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, Date, StyledCardImage, Title, TitleLink } from './style';
import { Body } from '../../../../Typography/style';

export default function ArticleCard({
  image,
  altText,
  title,
  date,
  intro,
  path
}) {
  return (
    <CardWrapper>
      <StyledCardImage src={image} alt={altText} />
      <Date>{date}</Date>
      <Title>
        <TitleLink to={path}>{title}</TitleLink>
      </Title>
      <Body as="p">{intro}</Body>
    </CardWrapper>
  );
}

ArticleCard.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};
