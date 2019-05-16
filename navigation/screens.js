import { Navigation } from "react-native-navigation";

export function registerScreens() {
  Navigation.registerComponent(
    "Home",
    () => require("../containers/home/home").default
  );
  Navigation.registerComponent(
    "NBA",
    () => require("../containers/nba/nba").default
  );
  Navigation.registerComponent(
    "Event",
    () => require("../containers/event/event").default
  );
}
