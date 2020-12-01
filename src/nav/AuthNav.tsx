import React, { useState, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from '../scenes';
import HomeStackScreen from './HomeStackScreen';

const AuthStack = createStackNavigator();

const AuthNav = ({ navigation }) => {
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
