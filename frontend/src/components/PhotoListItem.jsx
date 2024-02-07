import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useApplicationData } from "hooks/useApplicationData";
import { Skeleton } from "@mui/material";

// Rendering Each Photo

const PhotoListItem = ({ photo, toggleFavorites, favorites, toggleModal, disableBackgroundClick }) => {
  const { state } = useApplicationData();
  const { urls, user, location } = photo;

  
  return (
    <div className="photo-list__item ">
      {state.isLoading ? (<><PhotoFavButton favorites={favorites}
        toggleFavorites={toggleFavorites}
        photo={photo} /><img className="photo-list__image" onClick={() => !disableBackgroundClick && toggleModal(photo)} src={urls.full} /><div className='photo-list__user-details'>
          <img className="photo-list__user-profile" src={user.profile} />
          <div className="photo-list__user-info">
            <span>{user.name}</span>
            <br />
            <div className="photo-list__user-location">
              <span>{location.city}, {location.country}</span>
            </div>
          </div>
        </div></>
      ) : (
        <Skeleton variant="square"
                  width={150}
                  height={100}
                  animation="wave"/>              
      ) }
    </div>
  )
};

export default PhotoListItem;
