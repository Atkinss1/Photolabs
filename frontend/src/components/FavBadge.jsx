import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavorite }) => {
  const hasFavorites = isFavorite.length !== 0;
  return (
    <div className='fav-badge'>
      { isFavorite.length !== 0 ?
      (<FavIcon displayAlert={hasFavorites} selected={true}  />) :
      (<FavIcon />) }
    </div>
  ) 
};

export default FavBadge;