import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { addPost } from "../store/actions/post";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { THEME } from "../theme.js";

const img =
  "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg";

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const saveHandler = () => {
    const post = {
      img,
      text,
      date: new Date().toJSON(),
      booked: false
    };
    dispatch(addPost(post));
    navigation.navigate("Main");
  };
  return (
    <ScrollView style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <View>
          <Text style={styles.title}>Создай новый пост</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Введите текст поста"
            value={text}
            onChangeText={setText}
            multiline
          />
          <Image style={styles.image} source={{ uri: img }} />
          <Button
            title="Создать пост"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Создать пост",
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    marginVertical: 20
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "open-regular",
    marginVertical: 10
  },
  textarea: {
    padding: 10,
    marginVertical: 10
  },
  image: {
    width: "100%",
    height: 200,
    marginVertical: 10
  }
});
