import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

// Rendering Icon dependent on state

const FavBadge = ({ favorites }) => {
  const hasFavorites = favorites.length !== 0;
  return (
    <div className='fav-badge'>
      { hasFavorites ?
      (<FavIcon displayAlert={hasFavorites}
                selected={true}  />) :
      (<FavIcon />) }
    </div>
  ) 
};

export default FavBadge;