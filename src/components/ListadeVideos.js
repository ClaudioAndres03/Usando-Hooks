import React from "react";
import VideoItem from "./VideoItem";

const ListadeVideos = ({ lista }) => {
  return (
    <div>
      {lista.map((video) => (
        <VideoItem video={video} />
      ))}
    </div>
  );
};

export default ListadeVideos;
