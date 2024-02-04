import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

// Rendering individual PhotoListItem Components

const PhotoList = ({ photos, toggleFavorites, favorites, toggleModal }) => {
  
  return (
    <ul className="photo-list">
      {photos.map(photo => {
       return <PhotoListItem key={photo.id}
                             photo={photo}
                             toggleFavorites={toggleFavorites}
                             favorites={favorites}
                             toggleModal={toggleModal} />
      })}
    </ul>
    );
};

export default PhotoList;
