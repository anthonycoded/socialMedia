import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home/HomeScreen";
import Header from "../../components/Header";
import GoBack from "../../components/GoBack";
import { theme } from "../../config/Theme";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <>
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            animation: "none",
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        />

        {/* <HomeStack.Screen
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
      </HomeStack.Navigator>
    </>
  );
};

export default HomeNavigator;
