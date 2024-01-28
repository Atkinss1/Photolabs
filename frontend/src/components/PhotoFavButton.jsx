import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favorite, setFavorite] = useState('false');

  function handleClick() {
    setFavorite(!favorite);
  }

return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      {favorite ? (
          <FavIcon />
      ) : (
        <div className="photo-list__fav-icon-svg">
          <FavIcon selected={true} />
        </div>
      )}
    </div>
  );
}

export default PhotoFavButton;