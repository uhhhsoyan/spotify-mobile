import React, { FC } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { HomeScreen, SettingsScreen, SettingsDetailScreen } from '../scenes';
import Icon from '../assets/icons';
import { Colors, Typography } from '../styles';
import { HomeStackParamList } from './types';

const HomeStack = createStackNavigator<HomeStackParamList>();

type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeStackScreen: FC<Props> = ({ navigation }: Props) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.GRAY_VERY_DARK,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            color: Colors.WHITE,
            fontFamily: Typography.FONT_600,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Icon
              onPress={() => navigation.goBack()}
              name="arrowBack"
              color={Colors.GRAY_LIGHT}
              size={24}
              style={{ marginLeft: 15 }}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="SettingsDetail"
        component={SettingsDetailScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: Colors.GRAY_VERY_DARK,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            color: Colors.WHITE,
            fontFamily: Typography.FONT_600,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Icon
              onPress={() => navigation.goBack()}
              name="arrowBack"
              color={Colors.GRAY_LIGHT}
              size={24}
              style={{ marginLeft: 15 }}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
