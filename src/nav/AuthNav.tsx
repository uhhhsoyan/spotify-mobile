import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from '../scenes';
import HomeStackScreen from './HomeStackScreen';
import { AuthStackParamList } from './types';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNav = () => {
  const [userToken, setUserToken] = useState(null);

  return (
    <AuthStack.Navigator>
      {userToken === null ? (
        <AuthStack.Screen name="SignIn" component={SignInScreen} />
      ) : (
        <AuthStack.Screen name="Home" component={HomeStackScreen} />
      )}
    </AuthStack.Navigator>
  );
};

export default AuthNav;
