import React, { Fragment } from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <Fragment>
      <img src={props.imageSource} />
      <img src={props.profile} />
      <p>{props.username}</p>
      <p>{props.location.city}</p>
      <p>{props.location.country}</p>
      </Fragment>
  )
};

export default PhotoListItem;
