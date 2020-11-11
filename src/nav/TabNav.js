import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Context as AuthContext } from '../context/AuthContext';
import HomeStackScreen from './HomeStackScreen';
import SearchStackScreen from './SearchStackScreen';
import LibraryStackScreen from './LibraryStackScreen';
import Icon from '../assets/icons';
import { Colors } from '../styles';

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
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
                },
            }}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Search" component={SearchStackScreen} />
            <Tab.Screen name="Library" component={LibraryStackScreen} />
        </Tab.Navigator>
    ) 
}

export default TabNav;