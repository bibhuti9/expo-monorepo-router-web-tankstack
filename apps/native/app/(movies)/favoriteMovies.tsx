import { SafeAreaView, View, FlatList, Platform } from "react-native";
import React from "react";

import { observer } from "mobx-react";
import { store } from "@repo/utils/store";
import { styles } from "./styles";
import PhotographersCard from "@/components/PhotographerCard";

function favoriteMovies() {
  const favorites = store.favoritesList;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={favorites}
          numColumns={Platform.select({
            web: 5,
            default: 2,
          })}
          contentContainerStyle={{ gap: 15, paddingHorizontal: 8 }}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PhotographersCard item={store.movies.get(item.id)} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
export default observer(favoriteMovies);
