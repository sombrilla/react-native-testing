import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './containers/home/home';
import Nba from './containers/nba/nba';
import Event from './containers/event/event';

const AppNavigator = createStackNavigator({
  Home: { screen: Home, navigationOptions: { title: 'HOME' }},
  Nba: { screen: Nba, navigationOptions: { title: 'NBA' } },
  Event: { screen: Event },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;