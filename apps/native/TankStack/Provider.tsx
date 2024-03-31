import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "@/components/useColorScheme";
import { Stack } from "expo-router";
import { photoGraphersUtilities } from "@repo/utils";
export default function Provider() {
  const colorScheme = useColorScheme();
  photoGraphersUtilities();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(movies)" />
      </Stack>
    </ThemeProvider>
  );
}
