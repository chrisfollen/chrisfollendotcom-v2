import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import PhotoModal from './components/PhotoModal';
import {
  GalleryColumnLeft,
  GalleryColumnRight,
  GalleryContainer,
  HeadingContainer,
  GalleryPhoto,
  QuoteTextContainer,
  QuoteText,
  QuoteAuthor
} from './style';
import { content, photos } from './copy';
import { PageColumn } from '../../components/PageColumn/style';

export default function Photo() {
  useEffect(() => {
    document.title = content.pageTitle;
  }, []);

  const [modalActive, setModalActive] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(photos.leftColumn[0]);

  const togglePhotoModal = () => {
    if (modalActive) {
      setModalActive(false);
    } else {
      setModalActive(true);
    }
  };

  const handlePhotoClick = (event) => {
    const photoURL = event.target.src;
    setCurrentPhoto(photoURL);
    togglePhotoModal();
  };

  return (
    <OuterPageContainer>
      <PhotoModal
        togglePhotoModal={togglePhotoModal}
        currentPhoto={currentPhoto}
        modalActive={modalActive}
      />
      <PageColumn>
        <HeadingContainer>
          <QuoteTextContainer>
            <QuoteText>{content.quote}</QuoteText>
            <QuoteAuthor>{content.quoteAuthor}</QuoteAuthor>
          </QuoteTextContainer>
        </HeadingContainer>
        <GalleryContainer>
          <GalleryColumnLeft>
            {photos.leftColumn.map((photo) => (
              <GalleryPhoto
                onClick={handlePhotoClick}
                src={photo.photo}
                key={photo.photo}
                alt={photo.alt}
              />
            ))}
          </GalleryColumnLeft>
          <GalleryColumnRight>
            {photos.rightColumn.map((photo) => (
              <GalleryPhoto
                onClick={handlePhotoClick}
                src={photo.photo}
                key={photo.photo}
                alt={photo.alt}
              />
            ))}
          </GalleryColumnRight>
        </GalleryContainer>
        <Footer />
      </PageColumn>
    </OuterPageContainer>
  );
}
