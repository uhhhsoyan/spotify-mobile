import React, { useState } from 'react';
import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Context as AuthContext } from '../context/AuthContext';
import HomeStackScreen from './HomeStackScreen';
import SearchStackScreen from './SearchStackScreen';
import LibraryStackScreen from './LibraryStackScreen';
import MyTabBar from './MyTabBar';
import { TabNavParamList } from './types';

const Tab = createBottomTabNavigator<TabNavParamList>();

const TabNav = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Search" component={SearchStackScreen} />
      <Tab.Screen name="Library" component={LibraryStackScreen} />
    </Tab.Navigator>
  );
};

export default TabNav;
