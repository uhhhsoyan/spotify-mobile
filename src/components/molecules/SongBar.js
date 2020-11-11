import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors, Typography } from '../../styles';

const SongBar = () => {
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: 60,
        zIndex: 1,
        backgroundColor: Colors.GRAY_MEDIUM,
        bottom: 0,
        borderBottomColor: 'black',
        borderBottomWidth: 0.3
    },
    timeline: {

    },
    thumbnail: {

    },
    textContainer: {

    },
    title: {

    },
    subtitle: {

    }
})

export default SongBar;