import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, StyledBodyLink, StyledCardImage, Title } from './style';
import { Body } from '../../../../Typography/style';

export default function HobbyCard({
  image,
  title,
  copy,
  linkText,
  linkPath,
  copy2
}) {
  return (
    <CardWrapper>
      <StyledCardImage src={image} />
      <Title>{title}</Title>
      <Body as="p">
        {copy}
        {linkText && linkPath && (
          <StyledBodyLink to={linkPath}>{linkText}</StyledBodyLink>
        )}
        {copy2}{' '}
      </Body>
    </CardWrapper>
  );
}

HobbyCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  linkPath: PropTypes.string,
  copy2: PropTypes.string
};
