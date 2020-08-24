export function getVideos() {
  return fetch("https://goland-gin-poc.herokuapp.com/api/videos", {
    method: "GET",
  })
    .then((reponse) => reponse.json())
    .then((json) => json ?? []);
}
