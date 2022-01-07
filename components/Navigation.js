import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../constants/colors";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function Navigation() {
  function Home() {
    return (
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
        <TouchableOpacity onPress={() => console.log(colors)}>
          <Text>click</Text>
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
            headerRight: ({}) => (
              <View style={{ marginRight: 15 }}>
                <TouchableOpacity>
                  <FontAwesome name="search" size={24} color="white" />
                </TouchableOpacity>
              </View>
            ),
            headerTitleStyle: {
              color: "white",
              fontFamily: "SplineSemiBold",
              fontSize: 25,
            },
            headerStyle: { backgroundColor: `${colors.darkcornflower}` },
            headerShadowVisible: true,
            headerTintColor: "white",
            drawerStyle: {
              backgroundColor: "#0C0E13",
              width: 240,
              borderWidth: 1,
              borderRightColor: "#21282D",
            },
          }}
          name="Kenegram"
          component={MyStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
