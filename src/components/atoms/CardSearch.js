import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typography } from '../../styles';

const CardSearch= ({ text, color }) => {
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '48%',
        marginBottom: '4%',
        padding: 5,
        paddingRight: 30,
        borderRadius: 5
    },
    text: {
        padding: 5,
        color: Colors.WHITE,
        fontFamily: Typography.FONT_700,
        fontSize: Typography.FONT_SIZE_18,
        flexShrink: 1
    },
})

export default CardSearch;