import React, { useEffect }  from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Colors } from '../styles';

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const SignInScreen2 = () => {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '5d193d9374e5444c8c77c753ae758074',
      scopes: ['user-read-email', 'playlist-modify-public'],
      usePKCE: false,
      redirectUri: makeRedirectUri({ useProxy: false })
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      console.log(code)
      }
  }, [response]);

  return (
        <View style={styles.container}>
            <Button
                disabled={!request}
                title="Login"
                onPress={() => promptAsync()}
            />
        </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 40,
        backgroundColor: '#1db954',
        borderRadius: 40
    }
})

export default SignInScreen2;