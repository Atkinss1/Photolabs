import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ({ closeDisplayModal, modalData, toggleFavorites, favorites }) => {

  const similarPhotos = Object.values(modalData.similar_photos);
  
  
  return (
    <div className="photo-details-modal">
      <button onClick={closeDisplayModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem photo={modalData} favorites={favorites} toggleFavorites={toggleFavorites} />
      <PhotoList similarPhotos={similarPhotos} favorites={favorites} toggleFavorites={toggleFavorites} />
    </div>
  )
};

export default PhotoDetailsModal;
