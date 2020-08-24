export function getVideosFromYoutube(videoID) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyA0OkbvpSxenPPKCCx7a2BIksbWDVkQCok&part=snippet&id=${videoID}`,
    {
      method: "GET",
    }
  )
    .then((reponse) => reponse.json())
    .then((json) => json ?? {});
}
