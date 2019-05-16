import { AppRegistry } from "react-native";
import { Navigation } from "react-native-navigation";
import { registerScreens } from "./navigation/screens";
import App from "./App";

registerScreens();

AppRegistry.registerComponent("strmy", () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "Home"
      }
    }
  });
});
