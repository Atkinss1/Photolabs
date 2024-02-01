import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({similarPhoto, photo, toggleFavorites, favorites, toggleModal }) => {
  

  return (
    <div className="photo-list__item">
      {photo.modal ? (<><PhotoFavButton isFavorite={favorites} toggleFavorites={toggleFavorites} id={photo.id}/>
      <img onClick={() => toggleModal(photo)} className="photo-details-modal__image" src={photo.urls.full} />
      <div className='photo-details-modal__photographer-details'>
        <img className="photo-details-modal__photographer-profile" src={photo.user.profile} />
        <div className="photo-details-modal__photographer-info">
          {photo.user.name}
          <br />
          <span className="photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</span>
        </div>
      </div>
      <div>
      similar photos
      </div>
      <img src={similarPhoto} className="photo-details-modal__images" /></>) : 
      (<><PhotoFavButton isFavorite={favorites} toggleFavorites={toggleFavorites} id={photo.id}/>
      <img onClick={() => toggleModal(photo)} className="photo-list__image" src={photo.urls.full} />
      <div className='photo-list__user-details'>
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <div className="photo-list__user-info">
          {photo.user.name}
          <br />
          <span className="photo-list__user-location">{photo.location.city}, {photo.location.country}</span>
        </div>
      </div></>)}
    </div>
  )
};

export default PhotoListItem;
