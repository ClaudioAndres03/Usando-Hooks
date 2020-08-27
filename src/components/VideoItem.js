import React, { useEffect, useState } from "react";
import { getVideosFromYoutube } from "./../api/YouTube";

const VideoItem = ({ video }) => {
  const [picture, setPicture] = useState("");

  useEffect(() => {
    let videoID = video.URL.replace("https://www.youtube.com/watch?v=", "");
    getVideosFromYoutube(videoID).then((json) => {});
    console.log(videoID);
  });
  return (
    <li className="btn btn-outline-info">
      <a href={video.URL}>{video.title}</a>
    </li>
  );
};

export default VideoItem;
