import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    SearchScreen, 
    SearchInputScreen,  
} from '../scenes';

const SearchStack = createStackNavigator();

const SearchStackScreen = ({ navigation }) => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="Search" component={SearchScreen} 
                options={{ headerShown: false }} 
            />
            <SearchStack.Screen name="SearchInput" component={SearchInputScreen} 
                options={{ headerShown: false }} 
            />
        </SearchStack.Navigator>
    )
}

export default SearchStackScreen;