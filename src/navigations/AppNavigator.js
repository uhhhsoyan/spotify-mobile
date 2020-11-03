import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen, SearchScreen, LibraryScreen } from '../scenes';
import Icon from '../assets/icons';
import { Colors } from '../styles';

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
  defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused
            ? 'home'
            : 'homeOutline';
        } else if (routeName === 'Search') {
          iconName = 'search';
        } else if (routeName === 'Library') {
            iconName = 'library';
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: Colors.WHITE,
      inactiveTintColor: Colors.GRAY_LIGHT,
      style: {
          backgroundColor: Colors.GRAY_MEDIUM,
          borderTopColor: Colors.BACKGROUND,
          height: 60
      }
    },
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