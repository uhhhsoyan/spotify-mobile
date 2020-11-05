import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors, Typography } from '../../styles';
import { CardWide } from '../atoms';

const CardGrid = () => {
    return (
        <View style={styles.gridContainer}>
            <CardWide 
                imgSource={require('../../assets/images/Liked-Songs.png')}
                text='Liked Songs'
            />
            <CardWide 
                imgSource={require('../../assets/images/Discover-Weekly.png')}
                text='Discover Weekly'
            />
            <CardWide 
                imgSource={require('../../assets/images/Radio-Above-Beyond.png')}
                text='Above & Beyond Radio'
            />
            <CardWide 
                imgSource={require('../../assets/images/Release-Radar.png')}
                text='Release Radar'
            />
            <CardWide 
                imgSource={require('../../assets/images/Radio-Khruangbin.png')}
                text='Khruangbin Radio'
            />
            <CardWide 
                imgSource={require('../../assets/images/Radio-Spencer-Brown.png')}
                text='Spencer Brown Radio'
            />
        </View>
    )
}

/*
<View style={styles.cardContainer}>
                <Image source={require('../../assets/images/Liked-Songs.png')} style={styles.image} />
                <Text style={styles.text}>Liked Songs</Text>
            </View>
*/

const styles = StyleSheet.create({
    gridContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContainer: {
        height: 55,
        width: '49%',
        marginBottom: '2%',
        backgroundColor: Colors.GRAY_MEDIUM,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5
    },
    image: {
        height: '100%',
        width: 'auto',
        aspectRatio: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5        
    },
    text: {
        padding: 5,
        color: Colors.WHITE,
        fontFamily: Typography.FONT_600,
        fontSize: Typography.FONT_SIZE_12,
        flexShrink: 1
    },
})

export default CardGrid;