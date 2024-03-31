import { Instance, SnapshotIn, types } from "mobx-state-tree";
import { movies } from "../Movies";

export const favorites = types.model("favorites", {
  id: types.number,
  created_at: types.string,
});

export const favoritesStore = types.map(favorites);
export type favoritesStoreSnapShot = SnapshotIn<typeof favorites>;
export type favoritesStoreStoreType = Instance<typeof favorites>;
