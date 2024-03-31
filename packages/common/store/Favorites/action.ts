import { favoritesStoreStoreType } from ".";
import { StoreType } from "..";

export function favoriteAction({ favorites }: StoreType) {
  function setFavorite(favorite: favoritesStoreStoreType) {
    if (favorites.get(favorite.id)) {
      return favorites.delete(favorite.id);
    }
    return favorites.set(favorite.id, favorite);
  }
  function addFavorite(favorites: favoritesStoreStoreType[]) {
    favorites.forEach((snapshot): void => setFavorite(snapshot));
  }
  return { setFavorite, addFavorite };
}
