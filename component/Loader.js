import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import BouncingPreloader from "react-native-bouncing-preloaders";

import { Card } from "react-native-paper";

export default function Loader() {
  return (
    <View style={styles.container}>
      <BouncingPreloader
        icons={[
          require("../assets/eth.png"),
          require("../assets/btc.png"),
          require("../assets/doge.png"),
          require("../assets/bnb.png"),
        ]}
        leftRotation="-680deg"
        rightRotation="360deg"
        leftDistance={-180}
        rightDistance={-250}
        speed={1200}
        size={70}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
