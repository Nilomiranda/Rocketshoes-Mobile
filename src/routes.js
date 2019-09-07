/** navigation imports */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/** application pages */
import Home from './pages/Home';
import Cart from './pages/Cart';

const appNavigator = createStackNavigator(
  {
    Home,
    Cart,
  },
  // {
  //   defaultNavigationOptions: {
  //     headerStyle: {
  //       backgroundColor: '#141419',
  //     },
  //     headerTintColor: '#FFF',
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //     },
  //   },
  // },
  // {
  //   initialRouteName: 'Home',
  // },
);

appNavigator.navigationOptions = {
  title: 'Test',
};

export default createAppContainer(appNavigator);
