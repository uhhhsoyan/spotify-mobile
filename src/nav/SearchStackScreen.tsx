import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen, SearchInputScreen } from '../scenes';
import { SearchStackParamList } from './types';

const SearchStack = createStackNavigator<SearchStackParamList>();

const SearchStackScreen: FC = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      <SearchStack.Screen
        name="SearchInput"
        component={SearchInputScreen}
        options={{ headerShown: false }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
