import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LibraryScreen } from '../scenes';
import { LibraryStackParamList } from './types';

const LibraryStack = createStackNavigator<LibraryStackParamList>();

const LibraryStackScreen: FC = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="Library"
        component={LibraryScreen}
        options={{ headerShown: false }}
      />
    </LibraryStack.Navigator>
  );
};

export default LibraryStackScreen;
