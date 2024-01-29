import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {

  const [favorite, setFavorite] = useState(false);
  
  function toggleFavorite() {
  setFavorite(!favorite);
  }
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton isFavorite={favorite} onToggleFavorite={toggleFavorite} />
      <img className="photo-list__image" src={props.photo.imageSource} />
      <div className='photo-list__user-details'>
        <img className="photo-list__user-profile" src={props.photo.profile} />
        <div className="photo-list__user-info">
          {props.photo.username}
          <br />
          <span className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</span>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
