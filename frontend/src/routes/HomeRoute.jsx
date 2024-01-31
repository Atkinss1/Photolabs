import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ photos, topics, toggleModal, modalInfo, favorites, toggleFavorites }) => {
  
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorites={favorites}/>
      <PhotoList photos={photos} toggleFavorites={toggleFavorites} favorites={favorites} toggleModal={toggleModal} modalInfo={modalInfo} />
    </div>
  );
};

export default HomeRoute;
