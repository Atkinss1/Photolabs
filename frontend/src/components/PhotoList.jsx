import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos }) => {
  
  return (
    <ul className="photo-list">
      {photos.map(photo => {
       return <PhotoListItem key={photo.id} photo={photo} />
      }) }
    </ul>
    );
};

export default PhotoList;
