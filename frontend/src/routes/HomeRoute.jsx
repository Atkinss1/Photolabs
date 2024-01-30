import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ photo, topic }) => {
  
  return (
    <div className="home-route">
      <TopNavigation topics={topic}/>
      <PhotoList photo={photo}/>
    </div>
  );
};

export default HomeRoute;
