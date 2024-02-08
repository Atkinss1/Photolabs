import React from 'react';
import { useApplicationData } from 'hooks/useApplicationData';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photo, favorites, toggleFavorites }) {
  
  const isFavorite = favorites.some((favorite) => favorite.id === photo.id);
  
  return (
    <div onClick={() => toggleFavorites(photo)} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorite} />
      </div>
    </div>
  );
}


export default PhotoFavButton;