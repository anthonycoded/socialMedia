import { View, Text, FlatList } from "react-native";
import React from "react";
import Post from "./components/Post";
import { useSelector } from "react-redux";

const PostList = () => {
  const post = useSelector((state) => state.timeline.posts);
  return (
    <View>
      {post.map((item, i) => {
        return <Post item={item} key={i}></Post>;
      })}
    </View>
  );
};

export default PostList;
