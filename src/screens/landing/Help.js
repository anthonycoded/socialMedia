import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Linking } from "react-native";
import { config } from "../../config/Config";
import { theme } from "../../config/Theme";

const Help = ({ colors, height, bgColor }) => {
  const styles = StyleSheet.create({
    container: {
      height: height ? config.hp(`${height}%`) : "10%",
      backgroundColor: bgColor ? bgColor : "rgba(0,0,0,0)",
      flexDirection: "row",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    inputContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: config.wp("4%"),
    },
    text: {
      fontSize: 18,
      color: theme.colors.primary,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 16 }}>Don't have an account?</Text>
        <Text style={styles.text}> Sign Up.</Text>
      </View>
    </View>
  );
};

export default Help;
