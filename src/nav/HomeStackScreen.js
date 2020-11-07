import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    HomeScreen, 
    SearchScreen, 
    LibraryScreen,
    SettingsScreen,
    SearchInputScreen,
    SplashScreen,
    SignInScreen,
    PlaylistScreen,
    ArtistScreen,
} from '../scenes';
import Icon from '../assets/icons';
import { Colors, Typography } from '../styles';

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

export default HomeStackScreen;