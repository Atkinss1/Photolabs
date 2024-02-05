import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

// Rendering Icon dependent on state

const FavBadge = ({ favorites, displayFavorites }) => {
  const hasFavorites = favorites.length !== 0;
  return (
    <div onClick={() => {displayFavorites()}} className='fav-badge'>
      <FavIcon displayAlert={hasFavorites}
                selected={hasFavorites}  />
    </div>
  ) 
};

export default FavBadge;