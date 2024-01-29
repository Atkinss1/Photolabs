import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFavorite, onToggleFavorite}) {
  
  return (
    <div onClick={onToggleFavorite} className="photo-list__fav-icon">
      {isFavorite ? (
        <div className="photo-list__fav-icon-svg">
          <FavIcon selected={true} />
        </div>
      ) : (
        <div className="photo-list__fav-icon-svg">
          <FavIcon />
        </div>
      )}
    </div>
  );
}


export default PhotoFavButton;