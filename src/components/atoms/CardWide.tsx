import React, { FC } from 'react';
import { View, Image, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import { Colors, Typography } from '../../styles';

type Props = {
  imgSource: ImageSourcePropType;
  text: string;
}

const CardWide: FC<Props> = ({ imgSource, text }) => {
    return (
        <View style={styles.container}>
            <Image source={imgSource} style={styles.image} />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 55,
        width: '49%',
        marginBottom: '2%',
        backgroundColor: Colors.GRAY_MEDIUM,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    image: {
        height: '100%',
        width: 'auto',
        aspectRatio: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    text: {
        padding: 5,
        color: Colors.WHITE,
        fontFamily: Typography.FONT_600,
        fontSize: Typography.FONT_SIZE_12,
        flexShrink: 1,
    },
});

export default CardWide;