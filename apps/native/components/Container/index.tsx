import { View, SafeAreaView, ActivityIndicator, Platform } from "react-native";
import React from "react";
import { styles } from "./styles";
import MasonryList from "@react-native-seoul/masonry-list";
import PhotographersCard from "../PhotographerCard";
import { moviesStoreSnapShot } from "@repo/utils/store/Movies";
import { favoritesStoreStoreType } from "@repo/utils/store/Favorites";
import { store } from "@repo/utils/store";
import { observer } from "mobx-react";

interface PropsTypes {
  data: moviesStoreSnapShot[] | favoritesStoreStoreType[];
  type?: "photographers" | "favorites";
}

function Container({ data, type = "photographers" }: PropsTypes) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {data.length == 0 ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator />
          </View>
        ) : (
          <MasonryList
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{
              paddingHorizontal: 10,
            }}
            numColumns={Platform.select({
              web: 5,
              default: 2,
            })}
            data={data}
            renderItem={({ item }: any) => (
              <PhotographersCard
                item={
                  type === "photographers" ? item : store.movies.get(item.id)
                }
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
export default observer(Container);
