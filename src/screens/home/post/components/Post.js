import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { Video, AVPlaybackStatus } from "expo-av";
import { IOScrollView, InView } from "react-native-intersection-observer";
import { config } from "../../../../config/Config";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../../config/Theme";

const Post = ({ item }) => {
  const video = useRef(null);
  const [status, setStatus] = useState({
    loading: false,
    buffering: false,
    isPlaying: false,
    loaded: false,
    error: undefined,
    showError: false,
  });

  useEffect(() => {}, []);

  return (
    <View
      style={{
        width: "100%",
        //height: config.hp("40%"),

        borderBottomColor: theme.colors.faded,
        borderBottomWidth: 1,
        paddingBottom: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: config.wp("2%"),
          paddingVertical: 5,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Ionicons
              name="person-circle-outline"
              size={32}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 18, textTransform: "capitalize" }}>
              @{item.username}
            </Text>
            <Text>Orlando FL,</Text>
          </View>
        </View>

        <Ionicons
          name="ellipsis-horizontal"
          size={26}
          color={theme.colors.primary}
        />
      </View>
      <Video
        volume={1}
        ref={video}
        style={{
          width: "100%",

          minHeight: 300,
          //height: 300,
          //borderRadius: 12,
          //paddingVertical: config.hp("2.5%"),
        }}
        source={{
          uri: item.file,
        }}
        onError={(error) => setStatus({ ...status, error: error })}
        resizeMode="cover"
        isLooping
        shouldPlay
        onPlaybackStatusUpdate={(update) => setStatus({ ...status, update })}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingTop: 7,
          paddingHorizontal: config.wp("2%"),
        }}
      >
        <Ionicons
          name="chatbox-outline"
          size={32}
          color={theme.colors.primary}
          style={{ marginRight: 10 }}
        />
        <Ionicons name="heart-outline" size={32} color={theme.colors.primary} />
      </View>

      <View
        style={{
          //paddingVertical: config.hp("1%"),
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          paddingHorizontal: config.wp("2%"),
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "500" }}>
          @{item.username}
          {"  "}
          <Text style={{ fontWeight: "normal", fontSize: 16 }}>
            {item.comment}
            {item.comment}

            {item.comment}
          </Text>
        </Text>
      </View>
      <Text
        style={{
          marginTop: 5,
          fontSize: 16,
          color: theme.colors.fadedDark,
          width: "100%",
          textAlign: "right",
          paddingHorizontal: config.wp("2%"),
        }}
      >
        2mins ago
      </Text>
      {/* <IOScrollView style={{ width: "100%", height: "100%" }}>
        <InView
          triggerOnce
          style={{ width: "100%", height: "100%" }}
          onChange={(inView) => {
            inView ? video.current.playAsync() : video.current.pauseAsync();
          }}
        ></InView>
      </IOScrollView> */}
    </View>
  );
};

export default Post;
