import { useEffect } from "react";
import {
  addToFavourites,
  fetchFavourites,
  fetchPhotographers,
} from "../../../apps/web/app/api";
import { moviesStoreStoreType } from "../store/Movies";
import { store } from "../store";
import { favoritesStoreStoreType } from "../store/Favorites";

export const photoGraphersUtilities = () => {
  const fetchPhotographer = async () => {
    const result = (await fetchPhotographers()) as moviesStoreStoreType[];
    store.addMoviees(result);
    fetchFavourite();
  };

  const fetchFavourite = async () => {
    const favorites = (await fetchFavourites()) as favoritesStoreStoreType[];
    store.addFavorite(favorites);
  };

  useEffect(() => {
    fetchPhotographer();
  }, []);
};

export const addFavourite = async (favorite: favoritesStoreStoreType) => {
  const result = await addToFavourites(favorite.id);
  store.setFavorite(favorite);
};
