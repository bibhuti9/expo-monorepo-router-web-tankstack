import { moviesStoreStoreType } from ".";
import { StoreType } from "..";

export function moviesAction({ movies }: StoreType) {
  function setMovies(movie: moviesStoreStoreType) {
    movies.set(movie.id, movie);
  }
  function addMoviees(movies: moviesStoreStoreType[]) {
    movies.forEach((snapshot): void => setMovies(snapshot));
  }
  return { setMovies, addMoviees };
}
