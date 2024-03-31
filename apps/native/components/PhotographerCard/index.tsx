import {
  View,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";

import { styles } from "./styles";
import { moviesStoreStoreType } from "@repo/utils/store/Movies";
import { addFavourite } from "@repo/utils";
import SmallFavoriteIcon from "@/assets/svgIcon/SmallFavorite";
import SmallOurlineFavorite from "@/assets/svgIcon/SmallOurlineFavorite";
import { store } from "@repo/utils/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface PropsTypes {
  item: moviesStoreStoreType;
}

function PhotographersCard({ item }: PropsTypes) {
  const queryClient = useQueryClient();
  const hasFavourite = store.favorites.get(item.id);

  const addToFavourite = async () => {
    await addFavourite({
      id: item.id,
      created_at: new Date().toISOString(),
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async () => await addToFavourite(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: item.src.medium }} style={styles.image}>
        {isPending ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size={"large"} color={"#2f95dc"} />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.heaerContainer}
            onPress={() => mutate()}
          >
            {hasFavourite ? <SmallFavoriteIcon /> : <SmallOurlineFavorite />}
          </TouchableOpacity>
        )}
      </ImageBackground>
    </View>
  );
}
export default PhotographersCard;
