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
  return (
    <Link to={path}>
      <CardWrapper>
        <StyledCardImage src={image} alt={altText} />
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Body as="p">{intro}</Body>
      </CardWrapper>
    </Link>
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
