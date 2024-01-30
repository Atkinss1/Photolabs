import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ id, isFavorite, onToggleFavorite}) {
  
  return (
    <div onClick={() => onToggleFavorite(id)} className="photo-list__fav-icon">
      {isFavorite.includes(id) ? (
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