import { View, Text } from "react-native";
import React from "react";
import { theme } from "../../../../config/Theme";

const StoryCircle = ({ item }) => {
  return (
    <View
      style={{
        width: 80,
        height: 80,
        borderRadius: 100 / 2,
        backgroundColor: theme.colors.primary,
        borderWidth: 2,
        borderColor: theme.colors.faded,
        marginRight: 10,
      }}
    ></View>
  );
};

export default StoryCircle;
