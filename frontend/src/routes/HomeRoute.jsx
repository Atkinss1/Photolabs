import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ photos, topics }) => {
  const [favorite, setFavorite] = useState([]);
  
  function toggleFavorite(id) {
    setFavorite((currentFavorites) => {
      if (currentFavorites.includes(id)) {
        return currentFavorites.filter(favoriteId => favoriteId !== id);
      }
      else {
        return [...currentFavorites, id];
      }
    })
  }
  
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavorite={favorite}/>
      <PhotoList photos={photos} onToggleFavorite={toggleFavorite} isFavorite={favorite} />
    </div>
  );
};

export default HomeRoute;
