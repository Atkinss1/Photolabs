import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

// Rendering Home Page

const HomeRoute = ({ photos, topics, toggleModal, modalInfo, favorites, toggleFavorites, photosByTopic, disableBackgroundClick, displayFavoritePhotos, returnHome }) => {

  
  return (
    <div className="home-route">
      <TopNavigation topics={topics}
                     favorites={favorites}
                     photosByTopic={photosByTopic}
                     displayFavoritePhotos={displayFavoritePhotos}
                     returnHome={returnHome} />

      <PhotoList photos={photos}
                 toggleFavorites={toggleFavorites}
                 favorites={favorites}
                 toggleModal={toggleModal}
                 modalInfo={modalInfo}
                 disableBackgroundClick={disableBackgroundClick} />
    </div>
  );
};

export default HomeRoute;
