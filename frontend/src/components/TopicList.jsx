import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

// Rendering a list of individual TopicListItem Components

const TopicList = ({ topics, photosByTopic }) => {
  
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => {
        return <TopicListItem key={topic.id}
                              title={topic.title}
                              id={topic.id}
                              photosByTopic={photosByTopic} />
      })}
    </div>
  );
};

export default TopicList;
