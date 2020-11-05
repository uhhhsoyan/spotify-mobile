import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { 
    HomeScreen, 
    SearchScreen, 
    LibraryScreen,
    SettingsScreen,
    PlaylistScreen,
    ArtistScreen,
} from '../scenes';
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

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
  Search: {
    screen: SearchScreen,
  },
  Library: {
    screen: LibraryScreen,
  },
  Playlist: {
      screen: PlaylistScreen,
  },
  Artist: {
      screen: ArtistScreen,
  }
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;