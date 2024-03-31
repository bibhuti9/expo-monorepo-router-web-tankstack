import { Instance, types } from "mobx-state-tree";
import { moviesStore, moviesStoreStoreType } from "./Movies";
import { favoritesStore, favoritesStoreStoreType } from "./Favorites";
import { moviesAction } from "./Movies/action";
import { favoriteAction } from "./Favorites/action";

export const Store = types
  .model("rootStore", {
    movies: moviesStore,
    favorites: favoritesStore,
  })
  .actions(moviesAction)
  .actions(favoriteAction)
  .views((store) => ({
    get photographers(): moviesStoreStoreType[] {
      return Array.from<moviesStoreStoreType>(store.movies.values());
    },
    get favoritesList(): favoritesStoreStoreType[] {
      return Array.from<favoritesStoreStoreType>(store.favorites.values());
    },
  }));
export type StoreType = Instance<typeof Store>;
export const store = Store.create();
