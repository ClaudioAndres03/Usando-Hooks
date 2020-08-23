import React from "react";

const VideoItem = ({ video }) => (
  <li>
    <a href={video.URL}>{video.title}</a>
  </li>
);

export default VideoItem;
