import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ id, favorites, toggleFavorites}) {
  
  return (
    <div onClick={() => toggleFavorites(id)} className="photo-list__fav-icon">
      {Array.isArray(favorites) && favorites.includes(id) ? (
        
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