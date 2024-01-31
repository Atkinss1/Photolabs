import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ closeDisplayModal, modalData, toggleFavorites, favorites }) => {
  
  return (
    <div className="photo-details-modal">
      <button onClick={closeDisplayModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoList modalData={modalData} favorites={favorites} toggleFavorites={toggleFavorites} />
    </div>
  )
};

export default PhotoDetailsModal;
