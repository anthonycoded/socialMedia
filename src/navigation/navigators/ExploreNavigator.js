import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home/HomeScreen";
import Header from "../../components/Header";
import GoBack from "../../components/GoBack";
import { theme } from "../../config/Theme";
import ExploreScreen from "../../screens/explore/ExploreScreen";

const ExploreNavigator = () => {
  const ExploreStack = createNativeStackNavigator();
  return (
    <>
      <ExploreStack.Navigator initialRouteName="Home">
        <ExploreStack.Screen
          name="Home"
          component={ExploreScreen}
          options={{
            animation: "none",
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
          }}
        />

        {/* <ExploreStack.Screen
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
      </ExploreStack.Navigator>
    </>
  );
};

export default ExploreNavigator;
