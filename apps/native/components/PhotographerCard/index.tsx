import {
  View,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";

import { styles } from "./styles";
import { moviesStoreStoreType } from "@repo/utils/store/Movies";
import { addFavourite } from "@repo/utils";
import { observer } from "mobx-react";
import SmallFavoriteIcon from "@/assets/svgIcon/SmallFavorite";
import SmallOurlineFavorite from "@/assets/svgIcon/SmallOurlineFavorite";
import { store } from "@repo/utils/store";

interface PropsTypes {
  item: moviesStoreStoreType;
}

function PhotographersCard({ item }: PropsTypes) {
  const [isLoading, setIsLoading] = useState(false);
  const hasFavourite = store.favorites.get(item.id);

  const addToFavourite = async () => {
    setIsLoading(true);
    await addFavourite({
      id: item.id,
      created_at: new Date().toISOString(),
    });
    setIsLoading(false);
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: item.src.medium }} style={styles.image}>
        {isLoading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size={"large"} color={"#2f95dc"} />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.heaerContainer}
            onPress={addToFavourite}
          >
            {hasFavourite ? <SmallFavoriteIcon /> : <SmallOurlineFavorite />}
          </TouchableOpacity>
        )}
      </ImageBackground>
    </View>
  );
}
export default observer(PhotographersCard);
