import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { CardWide } from '../atoms';

const CardGrid: FC = () => {
  return (
    <View style={styles.gridContainer}>
      <CardWide imgSource={require('../../assets/images/Liked-Songs.png')} text="Liked Songs" />
      <CardWide
        imgSource={require('../../assets/images/Discover-Weekly.png')}
        text="Discover Weekly"
      />
      <CardWide
        imgSource={require('../../assets/images/Radio-Above-Beyond.png')}
        text="Above & Beyond Radio"
      />
      <CardWide imgSource={require('../../assets/images/Release-Radar.png')} text="Release Radar" />
      <CardWide
        imgSource={require('../../assets/images/Radio-Khruangbin.png')}
        text="Khruangbin Radio"
      />
      <CardWide
        imgSource={require('../../assets/images/Radio-Spencer-Brown.png')}
        text="Spencer Brown Radio"
      />
    </View>
  );
};


const styles = StyleSheet.create({
  gridContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CardGrid;
