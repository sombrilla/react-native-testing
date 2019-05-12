import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './containers/home/home';
import Nba from './containers/home/home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Nba: { screen: Nba },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;