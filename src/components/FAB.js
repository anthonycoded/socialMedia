import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { config } from "../config/Config";
import { theme } from "../config/Theme";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const FAB = () => {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }
  return (
    <View
      style={{
        position: "absolute",
        bottom: config.hp("2%"),
        right: config.wp("4%"),
        flexDirection: "column",
        alignItems: "center",
        zIndex: 30,
      }}
    >
      {open ? (
        <>
          <View
            style={{
              width: 75,
              height: 75,
              backgroundColor: theme.colors.faded,
              borderRadius: 50,
              marginBottom: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="ios-camera" size={32} color="black" />
          </View>
          <View
            style={{
              width: 75,
              height: 75,
              backgroundColor: theme.colors.faded,
              borderRadius: 50,
              marginBottom: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="videocam" size={32} color="black" />
          </View>
          <View
            style={{
              width: 75,
              height: 75,
              backgroundColor: theme.colors.faded,
              borderRadius: 50,
              marginBottom: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome name="microphone" size={32} color="black" />
          </View>
          <View
            style={{
              width: 75,
              height: 75,
              backgroundColor: theme.colors.faded,
              borderRadius: 50,
              marginBottom: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="pencil" size={32} color="black" />
          </View>
        </>
      ) : undefined}
      <View>
        <TouchableOpacity
          onPress={() => toggleOpen()}
          style={{
            backgroundColor: theme.colors.primaryLight,
            padding: 20,
            borderRadius: 50,
            shadowColor: "black",
            shadowRadius: 1,
            shadowOffset: { width: 1, height: 3 },
            shadowOpacity: 0.17,
          }}
        >
          <Image source={require("../../assets/fab.png")}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FAB;
