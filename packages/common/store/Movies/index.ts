import { Instance, SnapshotIn, types } from "mobx-state-tree";

export const movies = types.model("movies", {
  id: types.number,
  width: types.number,
  height: types.number,
  url: types.string,
  photographer: types.string,
  photographer_url: types.string,
  photographer_id: types.number,
  avg_color: types.string,
  src: types.model({
    original: types.string,
    large2x: types.string,
    large: types.string,
    medium: types.string,
    small: types.string,
    portrait: types.string,
    landscape: types.string,
    tiny: types.string,
  }),
  liked: types.boolean,
  alt: types.string,
});

export const moviesStore = types.map(movies);
export type moviesStoreSnapShot = SnapshotIn<typeof movies>;
export type moviesStoreStoreType = Instance<typeof movies>;
