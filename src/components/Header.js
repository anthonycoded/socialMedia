import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { config } from "../config/Config";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";

//const logoUri = require("../../assets/NewHeader1.png");
//const logoUri = require("../../assets/swab.png");
//const logoUri = require("../../assets/cobris.png");
//const logoUri = require("../../assets/worldwide.png");

const Header = () => {
  setStatusBarStyle("dark");
  return (
    <View styles={{}}>
      <Text style={{ fontSize: 24 }}>BackStage</Text>
      {/* <Image
        style={{
          width: 500,
          height: 35,
          //padding: 20,
        }}
        source={logoUri}
        //resizeMethod="auto"
        resizeMode="contain"
      /> */}
    </View>
  );
};

export default Header;
