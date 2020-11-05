import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    HomeScreen, 
    SearchScreen, 
    LibraryScreen,
    SettingsScreen,
    PlaylistScreen,
    ArtistScreen,
} from '../scenes';
import Icon from '../assets/icons';
import { Colors, Typography } from '../styles';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} 
                options={{ headerShown: false }} 
            />
            <HomeStack.Screen name="Settings" component={SettingsScreen} 
                options={{
                    headerStyle: {
                        backgroundColor: Colors.GRAY_VERY_DARK,
                        shadowColor: 'transparent'
                    },
                    headerTitleStyle: {
                        color: Colors.WHITE,
                        fontFamily: Typography.FONT_600
                    },
                    headerBackTitleVisible: false,
                    headerBackImage: () => (
                        <Icon 
                            onPress={() => navigation.goBack()}
                            name='arrowBack' 
                            color={Colors.GRAY_LIGHT} 
                            size={24} 
                            style={{ marginLeft: 15 }}
                        />
                    ),
                }}
            />
        </HomeStack.Navigator>
    );
}

const RootNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'homeOutline';
                        } else if (route.name === 'Search') {
                            iconName = 'search';
                        } else if (route.name === 'Library') {
                            iconName = 'library';
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: Colors.WHITE,
                    inactiveTintColor: Colors.GRAY_LIGHT,
                    style: {
                        backgroundColor: Colors.GRAY_MEDIUM,
                        borderTopColor: Colors.BACKGROUND,
                    }
                }}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Library" component={LibraryScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default RootNav;