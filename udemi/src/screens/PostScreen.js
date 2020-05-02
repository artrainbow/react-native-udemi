import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DATA } from "../data";
import { THEME } from "../theme";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam("postId");
  const post = DATA.find(item => item.id === postId);

  const removeHandler = () => {
    Alert.alert(
      "Удаление поста",
      "Вы точно хотите удалить пост?",
      [
        {
          text: "Отменить",
          style: "cancel"
        },
        {
          text: "Удалть",
          style: "destructive",
          onPress: () => {}
        }
      ],
      { cancelable: false }
    );
  };
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
        <Button
          title="Удалить"
          color={THEME.DANGER_COLOR}
          onPress={removeHandler}
        />
      </View>
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const postId = navigation.getParam("postId");
  const date = navigation.getParam("date");
  const booked = navigation.getParam("booked");
  const iconName = booked ? "ios-star" : "ios-star-outline";

  return {
    headerTitle: `Пост №${postId} от ${new Date(date).toLocaleDateString()}`,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Take photo"
          iconName={iconName}
          onPress={() => console.log("press photo")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: "open-regular"
  }
});
