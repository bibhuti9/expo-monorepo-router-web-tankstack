import {
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import PhotographersCard from "@/components/PhotographerCard";

import { observer } from "mobx-react";
import { store } from "@repo/utils/store";
import { moviesStoreSnapShot } from "@repo/utils/store/Movies";
import { styles } from "./styles";

function PhotographersList() {
  const photographers = store.photographers as moviesStoreSnapShot[];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator />
          </View>
        ) : ( */}
        <FlatList
          data={photographers}
          numColumns={Platform.select({
            web: 5,
            default: 2,
          })}
          contentContainerStyle={{ gap: 15, paddingHorizontal: 8 }}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PhotographersCard item={item} />}
        />
        {/* )} */}
      </View>
    </SafeAreaView>
  );
}

export default observer(PhotographersList);
