import { View, Text, ScrollView } from "react-native";
import React from "react";
import StoryCircle from "./components/StoryCircle";
import { config } from "../../../config/Config";

const Stories = () => {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{
        paddingVertical: config.hp("1%"),
        paddingHorizontal: config.wp("2%"),
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <StoryCircle></StoryCircle>
      <StoryCircle></StoryCircle>
      <StoryCircle></StoryCircle>
      <StoryCircle></StoryCircle>
      <StoryCircle></StoryCircle>
      <StoryCircle></StoryCircle>
    </ScrollView>
  );
};

export default Stories;
