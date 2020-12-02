import React, { useContext, FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { Colors } from '../styles';

const SignInScreen: FC = () => {
  const { signin } = useContext(AuthContext);
  // converted onPress to arrow function to get rid of warning...
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => signin}>
        <View style={styles.button}>
          <Text>Sign In</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 40,
  },
});

export default SignInScreen;
