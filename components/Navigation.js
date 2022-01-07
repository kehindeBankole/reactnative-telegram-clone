import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function Navigation() {
  function Home() {
    return (
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
        <TouchableOpacity>
          <Text>ssd</Text>
        </TouchableOpacity>
      </View>
    );
  }
  function Notifications() {
    return <View></View>;
  }

  function MyStack() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          options={{
            headerTitleStyle: { color: "white" },
            headerStyle: { backgroundColor: "black" },
            headerShadowVisible: true,
            headerTintColor: "white",
            drawerStyle: {
              backgroundColor: "#0C0E13",
              width: 240,
              borderWidth: 1,
              borderRightColor: "#21282D",
            },
          }}
          name="KENEGRAM"
          component={MyStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
