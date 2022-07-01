import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home/HomeScreen";
import Header from "../../components/Header";
import GoBack from "../../components/GoBack";
import { theme } from "../../config/Theme";
import NotificationScreen from "../../screens/notifications/NotificationScreen";

const NotificationNavigator = () => {
  const NotificationStack = createNativeStackNavigator();
  return (
    <>
      <NotificationStack.Navigator initialRouteName="Home">
        <NotificationStack.Screen
          name="Home"
          component={NotificationScreen}
          options={{
            animation: "none",
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
          }}
        />

        {/* <NotificationStack.Screen
          name="details"
          component={CaseDetails}
          options={({ navigation }) => ({
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
            headerBackVisible: false,
            headerLeft: () => {
              return <GoBack navigation={navigation} />;
            },
          })}
        /> */}
      </NotificationStack.Navigator>
    </>
  );
};

export default NotificationNavigator;
