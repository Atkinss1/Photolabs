import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ closeDisplayModal, selectedPhoto, toggleFavorites, favorites, toggleModal }) => {
  
    const similarPhotos = selectedPhoto.similar_photos ? Object.values(selectedPhoto.similar_photos) : [] 
     
    return (
      <div className="photo-details-modal">

        <div className='photo-details-modal__top-bar'>
          
          < button className="photo-details-modal__close-button" onClick={()=> closeDisplayModal()}>
            
            <img src={closeSymbol} alt="close symbol" />
          
          </button >
        
        </div>

        <div className='photo-details-modal__images'>
          <PhotoFavButton favorites={favorites}
                          toggleFavorites={toggleFavorites}
                          id={selectedPhoto.id} />
          
          <img className='photo-details-modal__image' src={selectedPhoto.urls.regular} />
          
          <div className='photo-details-modal__photographer-details'>
            <img className='photo-details-modal__photographer-profile' src={selectedPhoto.user.profile} />
            <div className='photo-details-modal__photographer-info'>
              <span>{selectedPhoto.user.name}</span>
              <div className="photo-details-modal__photographer-location">
                <span>{selectedPhoto.location.city}, {selectedPhoto.location.country}</span>
              </div>
            </div>
          </div>
                
        </div>
              
        <br></br>

        <div className='photo-details-modal__images'>
          <strong>Similar Photos</strong>
          <div>
            <PhotoList photos={similarPhotos}
                       favorites={favorites}
                       toggleFavorites={toggleFavorites}
                       toggleModal={toggleModal} />
          </div>
        </div>
      </div >
  )
};

export default PhotoDetailsModal;












