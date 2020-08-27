export function getVideosFromYoutube(apiKey, videoID) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&id=${videoID}`,
    {
      method: "GET",
    }
  )
    .then((reponse) => reponse.json())
    .then((json) => json ?? {});
}
