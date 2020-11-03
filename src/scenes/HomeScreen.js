import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Colors, Typography, Mixins } from '../styles';

const HomeScreen = () => {
    const [timeOfDay, setTimeOfDay] = useState('afternoon');
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <Text style={styles.header}>{`Good ${timeOfDay}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
        paddingTop: 50,
        paddingLeft: 20
    },
    header: {
        color: Colors.WHITE,
        fontFamily: Typography.FONT_600,
        fontSize: Typography.FONT_SIZE_24,
        letterSpacing: Typography.CHAR_SPACING_1
    }
})

export default HomeScreen;