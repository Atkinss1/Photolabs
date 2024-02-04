import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, favorites, photosByTopic}) => {

  return (
    <div className="top-nav-bar">
      
      <span className="top-nav-bar__logo">PhotoLabs</span>
      
      <TopicList topics={topics} 
                 photosByTopic={photosByTopic}/>
      
      <FavBadge favorites={favorites} />
    
    </div>
  )
}

export default TopNavigation;