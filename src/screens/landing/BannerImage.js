import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { config } from "../../config/Config";
import { theme } from "../../config/Theme";

const BannerImage = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require(`../../../assets/banner.png`)}
        resizeMode="contain"
        resizeMethod="scale"
      />

      <Text
        style={{
          fontSize: 40,
          color: theme.colors.primary,
          fontWeight: "bold",
          fontFamily: "OleoScript_400Regular",
        }}
      >
        BackStage
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "50%",
  },
  imageContainer: {
    height: config.hp("50%"),
    paddingHorizontal: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default BannerImage;
