import React from "react";

import { observer } from "mobx-react";
import { store } from "@repo/utils/store";
import Container from "@/components/Container";

function PhotographersList() {
  const photographers = store.photographers as [];
  return <Container data={photographers} />;
}

export default observer(PhotographersList);
