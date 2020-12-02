import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typography } from '../styles';
import Icon from '../assets/icons';

const SettingsDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Icon name="construction" size={100} color={Colors.WHITE} />
      <Text style={styles.title}>Screen under construction!</Text>
      <Text style={styles.subTitle}>Please try again another time</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Typography.FONT_700,
    fontSize: Typography.FONT_SIZE_24,
    color: Colors.WHITE,
    paddingTop: 30,
  },
  subTitle: {
    fontFamily: Typography.FONT_400,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_LIGHT,
    paddingTop: 20,
  },
});

export default SettingsDetailScreen;
