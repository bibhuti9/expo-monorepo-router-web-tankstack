import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function _layout() {
  const { top } = useSafeAreaInsets();
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: top }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#2f95dc",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color ?? "#000"} />
            ),
          }}
        />
        <Tabs.Screen
          name="favoriteMovies"
          options={{
            title: "Favorites",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="list" color={color ?? "#000"} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
