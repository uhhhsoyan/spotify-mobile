import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../styles';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    }
})

export default HomeScreen;