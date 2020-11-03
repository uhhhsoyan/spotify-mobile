import { createBottomTabNavigator } from 'react-navigation-tabs';

import { HomeScreen, SearchScreen, LibraryScreen } from '../scenes';

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
  Search: {
    screen: SearchScreen,
  },
  Library: {
    screen: LibraryScreen
  }
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;