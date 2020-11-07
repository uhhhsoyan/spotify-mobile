import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    LibraryScreen, 
} from '../scenes';

const LibraryStack = createStackNavigator();

const LibraryStackScreen = ({ navigation }) => {
    return (
        <LibraryStack.Navigator>
            <LibraryStack.Screen name="Library" component={LibraryScreen} 
                options={{ headerShown: false }} 
            />
            <LibraryStack.Screen name="Library Alt" component={LibraryScreen} 
                options={{ headerShown: false }} 
            />
        </LibraryStack.Navigator>
    )
}

export default LibraryStackScreen;