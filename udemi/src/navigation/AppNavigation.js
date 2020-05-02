import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";

const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Post: {
    screen: PostScreen
  }
});

export const AppNavigation = createAppContainer(PostNavigator);
