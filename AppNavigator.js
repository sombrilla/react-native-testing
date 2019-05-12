import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './containers/home/home.js';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;