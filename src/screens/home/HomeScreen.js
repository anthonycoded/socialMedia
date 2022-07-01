import { View, Text } from "react-native";
import React from "react";

import { config } from "../../config/Config";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        //paddingTop: config.hp("2%"),
      }}
    >
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
