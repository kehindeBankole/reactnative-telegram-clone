import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./components/Navigation";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
export default function App() {
  const [loaded] = useFonts({
    SplineSemiBold: require("./assets/fonts/SplineSans-SemiBold.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
