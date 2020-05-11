import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Post } from "./Post";

export const PostList = ({ data, onOpen }) => {
  if (!data.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>Постов пока нет</Text>
      </View>
    );
  }
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
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
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  }
});
