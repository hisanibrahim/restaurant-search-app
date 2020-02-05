import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const navigator = createStackNavigator(
  {
    SearchScreen,
    ResultShowScreen
  },
  {
    initialRouteName: "SearchScreen",
    defaultNavigationOptions: {
      title: "Restaurant Search"
    }
  }
);

export default createAppContainer(navigator);
