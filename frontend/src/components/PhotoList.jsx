import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, onToggleFavorite, isFavorite, toggleModal }) => {
  
  return (
    <ul className="photo-list">
      {photos.map(photo => {
       return <PhotoListItem key={photo.id} photo={photo} onToggleFavorite={onToggleFavorite} isFavorite={isFavorite} toggleModal={toggleModal} />
      }) }
    </ul>
    );
};

export default PhotoList;
