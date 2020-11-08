import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors, Typography } from '../../styles';

const SearchResult = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image />
            <View>

            </View>
            <Text style={styles.title}></Text>
            <Text style={styles.subtitle}></Text>
            <Icon name='' color={Colors.GRAY_LIGHT} size={24} />
        </View>
    )
}

const styles=StyleSheet.create({
    container: {

    },
    thumbnail: {
        height: 40,
        width: 40
    },
    title: {

    },
    subtitle: {

    }
})

export default SearchResult;