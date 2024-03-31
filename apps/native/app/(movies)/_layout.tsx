import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { tintColorLight } from "@/constants/Colors";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tintColorLight,
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
  );
}
