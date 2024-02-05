import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';

// Rendering Topics in header

const TopNavigation = ({ topics, favorites, photosByTopic, returnHome, displayFavorites }) => {

  return (
    <div className="top-nav-bar">
      
      <span onClick={() => {returnHome()}} className="top-nav-bar__logo">PhotoLabs</span>
      
      <TopicList topics={topics} 
                 photosByTopic={photosByTopic} />
      
      <FavBadge favorites={favorites}
                displayFavorites={displayFavorites} />
    
    </div>
  )
}

export default TopNavigation;