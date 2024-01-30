import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({photo}) => {

  const [favorite, setFavorite] = useState(false);
  
  function toggleFavorite() {
  setFavorite(!favorite);
  }
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton isFavorite={favorite} onToggleFavorite={toggleFavorite} />
      <img className="photo-list__image" src={photo.urls.full} />
      <div className='photo-list__user-details'>
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <div className="photo-list__user-info">
          {photo.user.name}
          <br />
          <span className="photo-list__user-location">{photo.location.city}, {photo.location.country}</span>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
