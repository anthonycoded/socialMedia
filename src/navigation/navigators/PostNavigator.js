import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home/HomeScreen";
import Header from "../../components/Header";
import GoBack from "../../components/GoBack";
import { theme } from "../../config/Theme";
import PostScreen from "../../screens/post/PostScreen";

const PostNavigator = () => {
  const PostStack = createNativeStackNavigator();
  return (
    <>
      <PostStack.Navigator initialRouteName="Home">
        <PostStack.Screen
          name="Home"
          component={PostScreen}
          options={{
            animation: "none",
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
          }}
        />

        {/* <PostStack.Screen
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
      </PostStack.Navigator>
    </>
  );
};

export default PostNavigator;
