import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import { useApplicationData } from 'hooks/useApplicationData';

// Rendering Home Page

const HomeRoute = ({ photos, topics, toggleModal, modalInfo, favorites, toggleFavorites, photosByTopic, disableClick }) => {

  const {
    state
  } = useApplicationData();
  
  return (
    <div className="home-route">
      <TopNavigation topics={topics}
                     favorites={favorites}
                     photosByTopic={photosByTopic} />

      <PhotoList photos={photos}
                 toggleFavorites={toggleFavorites}
                 favorites={favorites}
                 toggleModal={toggleModal}
                 modalInfo={modalInfo}
                 disableClick={disableClick} />
    </div>
  );
};

export default HomeRoute;
