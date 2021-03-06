import React, { FC } from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { Colors, Typography } from '../../styles';

type Props = {
  imgSource: ImageSourcePropType;
  text: string;
}

const Card: FC<Props> = ({ imgSource, text }) => {
  return (
    <View style={styles.container}>
      <Image source={imgSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 130,
  },
  image: {
    height: 'auto',
    width: 'auto',
    aspectRatio: 1,
    marginBottom: 10,
  },
  text: {
    fontFamily: Typography.FONT_500,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.WHITE,
  },
});

export default Card;
