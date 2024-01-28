import React, { Fragment } from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.photo.imageSource} />
      <img className="photo-list__user-profile" src={props.photo.profile} />
      <p className="photo-list__user-info">{props.photo.username}</p>
      <p className="photo-list__user-location">{props.photo.location.city}</p>
      <p className="photo-list__user-location">{props.photo.location.country}</p>
      </div>
  )
};

export default PhotoListItem;
