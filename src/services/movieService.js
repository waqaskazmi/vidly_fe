import http from "./httpService";
import config from "../config.json";

export function getMovies() {
  return http.get(config.apiEndpoint + '/movies');
}

export function getMovie(id) {
  return http.get(config.apiEndpoint + '/movies/' + id);
}

export function saveMovie(movie) {
  let movietoSave = {};
  movietoSave.title = movie.title;
  movietoSave.genreId = movie.genreId;
  movietoSave.numberInStock = movie.numberInStock;
  movietoSave.dailyRentalRate = movie.dailyRentalRate;
  
  if(movie._id){
    return http.put(config.apiEndpoint + '/movies/' + movie._id, movietoSave);
  }
  else{
    return http.post(config.apiEndpoint + '/movies', movietoSave);
  }
}

export function deleteMovie(id) {
    return http.delete(config.apiEndpoint + '/movies/' + id);
}