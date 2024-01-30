import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, isFavorite }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={ topics } />
      <FavBadge isFavorite={isFavorite} />
    </div>
  )
}

export default TopNavigation;