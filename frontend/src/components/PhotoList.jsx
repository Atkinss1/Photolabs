import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, toggleFavorites, favorites, toggleModal, modalData }) => {
  
  return (
    <ul className="photo-list">
      { modalData ? (<PhotoListItem photo={modalData} favorites={favorites} toggleFavorites={toggleFavorites}/>) : (photos.map(photo => {
       return <PhotoListItem key={photo.id} photo={photo} toggleFavorites={toggleFavorites} favorites={favorites} toggleModal={toggleModal} modal />
      }))}
    </ul>
    );
};

export default PhotoList;
