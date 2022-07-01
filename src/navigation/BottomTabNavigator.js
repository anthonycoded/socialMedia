import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Foundation,
} from "@expo/vector-icons";
import { config } from "../config/Config";
import { theme } from "../config/Theme";
import HomeNavigator from "./navigators/HomeNavigator";
import ExploreNavigator from "./navigators/ExploreNavigator";
import NotificationNavigator from "./navigators/NotificationNavigator";
import PostNavigator from "./navigators/PostNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="homeTab"
        screenOptions={{
          activeTintColor: theme.colors.primary,
          activeBackgroundColor: theme.colors.primary,
          inactiveTintColor: theme.colors.inActive,
          tabStyle: {
            backgroundColor: "#FFFFFF",
          },
          tabBarShowLabel: false,
          labelStyle: {
            fontSize: config.hp("1.75%"),
          },
          keyboardHidesTabBar: true,
          headerShown: false,
          tabBarLabelPosition: "below-icon",
          tabBarStyle: {
            height: config.hp("8%"),
          },
        }}
      >
        <Tab.Screen
          name="homeTab"
          component={HomeNavigator}
          options={{
            // tabBarLabel: ({ focused, color }) => (
            //   <Text
            //     style={{
            //       color: theme.colors.primary,
            //       fontSize: 14,
            //     }}
            //   >
            //     Home
            //   </Text>
            // ),
            tabBarShowLabel: false,
            tabBarColor: theme.colors.primary,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home-outline"
                size={focused ? 26 : 24}
                color={focused ? theme.colors.primary : theme.colors.inActive}
                backgroundColor={focused ? theme.colors.primary : "none"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreNavigator}
          options={{
            // tabBarLabel: ({ focused }) => (
            //   <Text
            //     style={{
            //       color: theme.colors.inActive,
            //       fontSize: 14,
            //     }}
            //   >
            //     Explore
            //   </Text>
            // ),
            tabBarShowLabel: false,
            tabBarColor: "#009387",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="search-outline"
                size={focused ? 26 : 24}
                color={focused ? theme.colors.primary : theme.colors.inActive}
                backgroundColor={focused ? theme.colors.primary : "none"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={PostNavigator}
          options={{
            tabBarColor: "#009387",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="camera-outline"
                size={focused ? 26 : 24}
                color={focused ? theme.colors.primary : theme.colors.inActive}
                backgroundColor={focused ? theme.colors.primary : "none"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationNavigator}
          options={{
            // tabBarLabel: ({ focused }) => (
            //   <Text
            //     style={{
            //       color: theme.colors.inActive,
            //       fontSize: 14,
            //     }}
            //   >
            //     Explore
            //   </Text>
            // ),
            tabBarColor: "#009387",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="notifications-outline"
                size={focused ? 26 : 24}
                color={focused ? theme.colors.primary : theme.colors.inActive}
                backgroundColor={focused ? theme.colors.primary : "none"}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="notes"
          component={HomeNavigator}
          options={{
            tabBarColor: "black",
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? theme.colors.primary : theme.colors.inActive,
                  fontSize: 14,
                }}
              >
                NFA
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="file-signature"
                size={focused ? 26 : 24}
                color={focused ? theme.colors.primary : theme.colors.inActive}
                backgroundColor={focused ? theme.colors.primary : "none"}
              />
            ),
          }}
        /> */}
        {/* <Tab.Screen
          name="docs"
          component={HomeNavigator}
          options={{
            tabBarLabel: "Bill Pay",
            tabBarColor: "black",
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? theme.colors.primary : theme.colors.inActive,
                  fontSize: 14,
                }}
              >
                Contact
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-document-text-outline"
                size={focused ? 26 : 24}
                color={focused ? theme.colors.primary : theme.colors.inActive}
                backgroundColor={focused ? theme.colors.primary : "none"}
              />
            ),
          }}
        /> */}
        <Tab.Screen
          name="blank"
          component=""
          options={{
            tabBarLabel: "Menu",
            tabBarColor: "black",
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? theme.colors.primary : theme.colors.inActive,
                  fontSize: 14,
                }}
              >
                Menu
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="menu-outline"
                size={focused ? 26 : 24}
                color={focused ? theme.colors.primary : theme.colors.inActive}
                backgroundColor={focused ? theme.colors.primary : "none"}
              />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.openDrawer();
            },
          })}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigator;
