import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
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

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Settings" component={SettingsScreen} />
    </HomeStack.Navigator>
  );
}

const RootNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'homeOutline';
                        } else if (route.name === 'Search') {
                            iconName = 'search';
                        } else if (route.name === 'Library') {
                            iconName = 'library';
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: Colors.WHITE,
                    inactiveTintColor: Colors.GRAY_LIGHT,
                    style: {
                        backgroundColor: Colors.GRAY_MEDIUM,
                        borderTopColor: Colors.BACKGROUND,
                    }
                }}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Library" component={LibraryScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default RootNav;