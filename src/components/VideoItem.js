import React, { useEffect, useState } from "react";
import { getVideosFromYoutube } from "./../api/YouTube";

const VideoItem = ({ video }) => {
  const [picture, setPicture] = useState("");

  useEffect(() => {
    let videoID = video.URL.replace("https://www.youtube.com/watch?v=", "");
    videoID = videoID.replace("http://www.youtube.com/watch?v=", "");
    const apiKey = "AIzaSyBIcL7oKKyHDcU6Ei6BzbFqzShTrl9Qcjs";
    getVideosFromYoutube(apiKey, videoID).then((json) => {
      console.log(json.items[0].snippet.thumbnails.high.url);
      setPicture(json.items[0].snippet.thumbnails.high.url);
    });
    console.log("Video ID == > " + videoID);
  });
  return (
    <li className="btn btn-outline-info">
      <img src={picture} />
      <a href={video.URL}>{video.title}</a>
    </li>
  );
};

export default VideoItem;
