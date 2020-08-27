import React from "react";
import VideoItem from "./VideoItem";

const ListadeVideos = ({ lista }) => {
  return (
    <div>
      {lista.map((video, i) => (
        <VideoItem key={i} video={video} />
      ))}
    </div>
  );
};

export default ListadeVideos;
