import React, { FC } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { LibraryScreen } from '../scenes';
import { LibraryStackParamList } from './types';

const LibraryStack = createStackNavigator();

type LibraryScreenNavigationProp = StackNavigationProp<
  LibraryStackParamList,
  'Library'
>;

type Props = {
  navigation: LibraryScreenNavigationProp;
};

const LibraryStackScreen: FC<Props> = ({ navigation }: Props) => {
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
