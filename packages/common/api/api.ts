import {
  addToFavourites,
  fetchFavourites,
  fetchPhotographers,
} from "../../../apps/web/app/api";
import { moviesStoreStoreType } from "../store/Movies";
import { store } from "../store";
import { favoritesStoreStoreType } from "../store/Favorites";
import { useQuery } from "@tanstack/react-query";

export const photoGraphersUtilities = () => {
  const fetchPhotographer = async () => {
    const result = (await fetchPhotographers()) as moviesStoreStoreType[];
    store.addMoviees(result);
    return store.movies;
  };

  const fetchFavourite = async () => {
    const favorites = (await fetchFavourites()) as favoritesStoreStoreType[];
    store.addFavorite(favorites);
    return store.favorites;
  };

  useQuery({
    queryKey: ["photographers"],
    queryFn: async () => await fetchPhotographer(),
  });

  useQuery({
    queryKey: ["favorites"],
    queryFn: async () => await fetchFavourite(),
  });
};

export const addFavourite = async (favorite: favoritesStoreStoreType) => {
  await addToFavourites(favorite.id);
  store.setFavorite(favorite);
};
