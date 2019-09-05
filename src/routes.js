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
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(appNavigator);
