import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Icon from '../assets/icons';
import { Colors, Typography } from '../styles';
import { SongBar } from '../components/molecules';
import { TabNavParamList } from './types';

type Props = BottomTabScreenProps;


const MyTabBar: FC<Props> = ({ state, descriptors, navigation }: Props) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <>
      <SongBar />
      <View style={styles.container}>
        {state.routes.map((route, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const icon = () => {
            let iconName: string | null;
            if (route.name === 'Home') {
              iconName = isFocused ? 'home' : 'homeOutline';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Library') {
              iconName = 'library';
            }
            return (
              <Icon
                name={iconName}
                size={24}
                color={isFocused ? Colors.WHITE : Colors.GRAY_LIGHT}
              />
            );
          };

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <View style={styles.labelContainer}>
                {icon()}
                <Text
                  style={[
                    styles.labelText,
                    { color: isFocused ? Colors.WHITE : Colors.GRAY_LIGHT },
                  ]}
                >
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.GRAY_MEDIUM,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 5,
    height: 70,
  },
  labelContainer: {
    alignItems: 'center',
  },
  labelText: {
    fontFamily: Typography.FONT_500,
    fontSize: Typography.FONT_SIZE_10,
    marginTop: 5,
  },
});

export default MyTabBar;
