import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Post } from "./Post";
import { DATA } from "../data";

export const PostList = ({ data, onOpen }) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flex: 1,
    padding: 10
  }
});
