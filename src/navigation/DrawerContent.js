import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Drawer, Text } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { clearState } from "../store/actions/authActions";

import Help from "../screens/landing/Help";
import { config } from "../config/Config";
import { theme } from "../config/Theme";

const DrawerContent = ({ navigation }) => {
  const data = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const { colors } = theme;

  const logout = async () => {
    await AsyncStorage.setItem("cookie", "");
    dispatch(clearState());
    navigation.navigate("Login");
  };

  const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      backgroundColor: "black",
    },
    userInfoSection: {
      paddingHorizontal: config.wp("3%"),
      paddingVertical: config.hp("1.2%"),
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#F4F4F4",
      borderBottomWidth: config.hp(".07%"),
      borderTopWidth: config.hp(".07%"),
      borderColor: theme.colors.fade,
    },
    userImageContainer: {
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: config.wp("1.5%"),
    },
    sideContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 5,
      width: "80%",
    },

    row: {
      marginTop: config.hp("1.5%"),
      flexDirection: "row",
      alignItems: "center",
    },
    paragraph: {
      fontWeight: "bold",
      marginRight: 3,
    },
    drawerSection: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
    },
    drawerItem: {
      overflow: "hidden",
      display: "flex",
      justifyContent: "flex-start",
    },
    bottomDrawerSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    preference: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    labelStyle: {
      fontSize: config.hp("2.25%"),
      color: "black",
      width: "100%",
    },
    userName: {
      fontSize: config.hp("2.5%"),
      paddingBottom: 5,
      textTransform: "capitalize",
    },
    userSettingsContainer: {
      flexDirection: "column",
      justifyContent: "space-between",

      width: "80%",
    },

    userSettings: {
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    userSettingsText: {
      fontSize: config.hp("1.6%"),
      color: colors.primary,
      fontWeight: "bold",
      paddingHorizontal: 7,
    },
  });
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <DrawerContentScrollView navigation={navigation} style={styles.drawer}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.userImageContainer}>
              <Ionicons name="person" size={24} color="black" />
            </View>
            <View style={styles.sideContainer}>
              <View style={styles.userSettingsContainer}>
                <Text style={styles.userName}>{data?.contactInfo?.name}</Text>
                <TouchableOpacity
                  style={styles.userSettings}
                  onPress={() => {
                    navigation.navigate("Profile/Settings");
                  }}
                >
                  <Text style={styles.userSettingsText}>Profile</Text>
                  <Text style={styles.userSettingsText}>Settings</Text>
                  <Text style={styles.userSettingsText}>Disclosures</Text>
                </TouchableOpacity>
              </View>
              <Ionicons
                name="close"
                color={colors.primary}
                size={config.hp("4.5%")}
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </View>
          </View>
          {/* <View style={styles.row}></View> */}
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            style={styles.drawerItem}
            labelStyle={styles.labelStyle}
            label="Home"
            icon={({ focused }) => (
              <Ionicons
                name="home-outline"
                size={focused ? 26 : 24}
                color={focused ? theme.colors.primary : theme.colors.inActive}
                backgroundColor={focused ? theme.colors.primary : "none"}
              />
            )}
            onPress={() => {
              navigation.navigate("home");
            }}
          />

          <DrawerItem
            style={[styles.drawerItem, styles.drawerItem]}
            labelStyle={styles.labelStyle}
            label="Logout"
            icon={({ focused }) => (
              <Ionicons
                name="ios-exit-outline"
                size={focused ? 26 : 24}
                color={focused ? theme.colors.primary : theme.colors.inActive}
                backgroundColor={focused ? theme.colors.primary : "none"}
              />
            )}
            onPress={() => logout()}
          />
          <View style={{ paddingHorizontal: 15 }}>
            <Help colors={colors} height={config.hp("1.5%")} />
          </View>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
