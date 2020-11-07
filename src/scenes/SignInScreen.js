import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { Colors, Typography } from '../styles';

const SignInScreen = () => {
    const { signin } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={signin}>
                <View style={styles.button}>
                    <Text>Sign In</Text>
                </View> 
            </TouchableOpacity>
        </View>
    )
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

export default SignInScreen;