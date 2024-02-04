import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useApplicationData } from "hooks/useApplicationData";

// Rendering Each Photo

const PhotoListItem = ({ photo, toggleFavorites, favorites, toggleModal, disableClick }) => {

  const { state } = useApplicationData();
  const { id, urls, user, location } = photo;
  
  return (
    <div className="photo-list__item">
      
      <PhotoFavButton favorites={favorites}
                      toggleFavorites={toggleFavorites}
                      id={id} />
      
      <img className="photo-list__image" onClick={() => !disableClick && toggleModal(photo)}  src={urls.full} />
      
      <div className='photo-list__user-details'>
        <img className="photo-list__user-profile" src={user.profile} />
        <div className="photo-list__user-info">
          <span>{user.name}</span>
          <br />
          <div className="photo-list__user-location">
            <span>{location.city}, {location.country}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
