import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { colors } from "../constants/colors";
export default function Home() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {Array.from({ length: 20 }, (v, i) => i).map((d, i) => (
        <View
          style={{
            marginBottom: 20,
            flexDirection: "row",
            //justifyContent: "space-between",
          }}
        >
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              marginRight: 10,
            }}
            source={require("../assets/kakashi.jpg")}
          />
          <View
            style={{
              borderBottomColor: `${colors.border}`,
              borderBottomWidth: i === 19 ? 0 : 0.3,
              width: Dimensions.get("window").width - 90,
              paddingBottom: 15,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: "MuktaMedium",
                  fontSize: 20,
                  textTransform: "capitalize",
                }}
              >
                kehinde bankole
              </Text>
              <Text
                style={{
                  fontFamily: "MuktaLight",
                  fontSize: 15,
                  textTransform: "capitalize",
                  color: `${colors.border}`,
                }}
              >
                message
              </Text>
            </View>

            <Text
              style={{
                fontFamily: "MuktaLight",
                fontSize: 15,
                textTransform: "uppercase",
                color: `${colors.border}`,
                marginRight: 10,
              }}
            >
              1:45 am
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingLeft: 15,
    paddingTop: 20,
  },
});
