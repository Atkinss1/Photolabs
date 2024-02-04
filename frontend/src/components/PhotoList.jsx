import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, toggleFavorites, favorites, toggleModal, similarPhotos }) => {
  
  return (
    <ul className="photo-list">
      { similarPhotos ? (similarPhotos.map(photos => {
        return <PhotoListItem key={photos.id}
                              photo={photos}
                              toggleFavorites={toggleFavorites}
                              favorites={favorites}
                              toggleModal={toggleModal} />
      })) : (photos.map(photo => {
       return <PhotoListItem key={photo.id}
                             photo={photo}
                             toggleFavorites={toggleFavorites}
                             favorites={favorites}
                             toggleModal={toggleModal} />
      }))}
    </ul>
    );
};

export default PhotoList;
