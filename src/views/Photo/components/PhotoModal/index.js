import React from 'react';
import PropTypes from 'prop-types';
import {
  CloseButton,
  PhotoModalContainer,
  CloseButtonWrapper,
  Photo
} from './style';

export default function PhotoModal({
  togglePhotoModal,
  currentPhoto,
  modalActive
}) {
  const handleCloseButtonClick = () => {
    togglePhotoModal();
  };

  return (
    <PhotoModalContainer modalActive={modalActive}>
      <CloseButtonWrapper>
        <CloseButton onClick={handleCloseButtonClick}>&times;</CloseButton>
      </CloseButtonWrapper>
      <Photo src={currentPhoto.photo} alt={currentPhoto.alt} />
    </PhotoModalContainer>
  );
}

PhotoModal.propTypes = {
  togglePhotoModal: PropTypes.func.isRequired,
  currentPhoto: PropTypes.object.isRequired,
  modalActive: PropTypes.bool.isRequired
};
