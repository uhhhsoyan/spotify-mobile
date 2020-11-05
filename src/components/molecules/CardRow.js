import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card } from '../atoms';

const CardRow = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal >
                <Card 
                    imgSource={require('../../assets/images/Liked-Songs.png')}
                    text='Liked Songs'
                />
                <Card 
                    imgSource={require('../../assets/images/Discover-Weekly.png')}
                    text='Discover Weekly'
                />
                <Card 
                    imgSource={require('../../assets/images/Radio-Above-Beyond.png')}
                    text='Above & Beyond Radio'
                />
                <Card 
                    imgSource={require('../../assets/images/Release-Radar.png')}
                    text='Release Radar'
                />
                <Card 
                    imgSource={require('../../assets/images/Radio-Khruangbin.png')}
                    text='Khruangbin Radio'
                />
                <Card 
                    imgSource={require('../../assets/images/Radio-Spencer-Brown.png')}
                    text='Spencer Brown Radio'
                />
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})

export default CardRow;