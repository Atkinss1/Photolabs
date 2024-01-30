import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics }) => {
  
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => {
        return <TopicListItem key={topic.id} title={topic.title} />
      })}
    </div>
  );
};

export default TopicList;
