import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photo }) => {
  
  return (
    <ul className="photo-list">
      {photo.map(photo => {
       return <PhotoListItem key={photo.id} photo={photo} />
      }) }
    </ul>
    );
};

export default PhotoList;
