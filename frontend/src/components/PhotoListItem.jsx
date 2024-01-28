import React, { Fragment } from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <Fragment>
      <img src={props.photo.imageSource} />
      <img src={props.photo.profile} />
      <p>{props.photo.username}</p>
      <p>{props.photo.location.city}</p>
      <p>{props.photo.location.country}</p>
      </Fragment>
  )
};

export default PhotoListItem;
