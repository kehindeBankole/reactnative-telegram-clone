import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import Home from "../screens/Home";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function Navigation() {
  function Notifications() {
    return <View></View>;
  }

  function CustomDrawerContent({ navigation }) {
    return (
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <View
          style={{
            height: 150,
            backgroundColor: `${colors.celestialblue}`,
            paddingTop: 30,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 70, height: 70, borderRadius: 100 }}
              source={require("../assets/kakashi.jpg")}
            />
            <TouchableOpacity style={{ marginTop: 7 }}>
              <FontAwesome5 name="moon" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View></View>
      </View>
    );
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
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
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
              fontFamily: "MuktaSemiBold",
              fontSize: 25,
            },
            headerStyle: { backgroundColor: `${colors.celestialblue}` },
            headerShadowVisible: true,
            headerTintColor: "white",
            drawerStyle: {
              backgroundColor: colors.white,
              width: Dimensions.get("window").width - 100,
              // borderWidth: 1,
              //borderRightColor: "white",
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
