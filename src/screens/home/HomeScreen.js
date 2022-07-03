import { View, Text, ScrollView } from "react-native";
import React from "react";

import { config } from "../../config/Config";
import Stories from "./stories/Stories";
import PostList from "./post/PostList";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={{}}>
      <Stories></Stories>
      <PostList></PostList>
    </ScrollView>
  );
};

export default HomeScreen;
