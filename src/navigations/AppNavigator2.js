import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { 
    HomeScreen, 
    SearchScreen, 
    LibraryScreen,
    SettingsScreen,
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

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Settings: SettingsScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerShown: false 
        })
    }
    );

const AppNavigator2 = createBottomTabNavigator(
    {
        Home: HomeStack,
        Search: SearchScreen,
        Library: LibraryScreen,
    }, 
    TabNavigatorConfig
    );

export default AppNavigator2;