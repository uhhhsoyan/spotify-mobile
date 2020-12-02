import React, { useContext, useState, FC } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { CardGrid, CardRow } from '../components/molecules';
import { Colors, Typography } from '../styles';
import Icon from '../assets/icons';
import { Context as AuthContext } from '../context/AuthContext';
import { HomeScreenNavigationProp } from '../nav/types';

type Props = {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: FC<Props> = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  // update to use Context
  const [timeOfDay, setTimeOfDay] = useState('afternoon');
  const [user, setUser] = useState('Eric Essoyan');

  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient
          colors={[Colors.BLUE, Colors.BACKGROUND]}
          locations={[0, 0.1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.6, y: 1 }}
          style={styles.linearGradient}
        >
          <StatusBar barStyle={'light-content'} />
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Icon name="settings" size={24} color={Colors.WHITE} style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
          <Text style={styles.header}>{`Good ${timeOfDay}`}</Text>
          <CardGrid />
          <Text style={styles.header}>Recently played</Text>
          <CardRow />
          <Text style={styles.header}>Your top shows</Text>
          <CardRow />
          <Text style={styles.header}>{`Made for ${user}`}</Text>
          <CardRow />
          <Text style={styles.header}>New releases for you</Text>
          <CardRow />
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  linearGradient: {
    padding: 20,
    paddingTop: 50,
  },
  header: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_600,
    fontSize: Typography.FONT_SIZE_24,
    marginBottom: 15,
  },
});

export default HomeScreen;
