import React from "react";
import VideoItem from "./VideoItem";

const ListadeVideos = ({ lista }) => {
  return (
    <ul>
      {lista.map((video) => (
        <VideoItem video={video} />
      ))}
    </ul>
  );
};

export default ListadeVideos;
