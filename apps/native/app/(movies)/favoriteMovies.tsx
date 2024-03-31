import React from "react";

import { observer } from "mobx-react";
import { store } from "@repo/utils/store";
import Container from "@/components/Container";

function favoriteMovies() {
  const favorites = store.favoritesList;

  return <Container data={favorites} type="favorites" />;
}
export default observer(favoriteMovies);
