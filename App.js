import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Navigation from "./components/Navigation";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { colors } from "./constants/colors";
export default function App() {
  const [loaded] = useFonts({
    MuktaSemiBold: require("./assets/fonts/Mukta-SemiBold.ttf"),
    MuktaMedium: require("./assets/fonts/Mukta-Medium.ttf"),
    MuktaLight: require("./assets/fonts/Mukta-Light.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          animated={true}
          backgroundColor={`${colors.darkcornflower}`}
        />
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
