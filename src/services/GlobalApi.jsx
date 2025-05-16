import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3/";
const api_key = "3182651b8545a8cc8cdeee40d1dadbcd";

//https://api.themoviedb.org/3/trending/all/day?api_key=3182651b8545a8cc8cdeee40d1dadbcd

const getTrendingVideos = axios.get(
  movieBaseUrl + "trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) =>
  axios.get(movieBaseUrl + "&with_genres=" + id);

export default { getTrendingVideos, getMovieByGenreId };

//this -> reference

// let obj = {
//   name: "MSI",
//   age: 24,

//   printData: function () {
//     console.log(this.name, this.age);
//   },
// };
