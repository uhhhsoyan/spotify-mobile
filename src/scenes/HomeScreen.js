import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Spacer } from '../components/atoms';
import { CardGrid, CardRow } from '../components/molecules';
import { Colors, Typography } from '../styles';
import Icon from '../assets/icons';
import spotifySearch from '../api/spotifySearch';
import { Context as AuthContext } from '../context/AuthContext';

const HomeScreen = ({ navigation }) => {
    const { state } = useContext(AuthContext);
    // update to use Context
    const [timeOfDay, setTimeOfDay] = useState('afternoon');
    const [user, setUser] = useState('Eric Essoyan');

    useEffect(() => {
        const search = async () => {
            const { data } = await spotifySearch.get('/browse/categories', {
                headers: { 'Authorization': 'Bearer ' + state.token },
                params: {

                }
            })
            console.log(data);
        };
        search()
    })

    return (
        <View style={styles.container}>
            <ScrollView>
                <LinearGradient
                    colors={[Colors.BLUE, Colors.BACKGROUND]}
                    locations={[ 0, .1 ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: .6, y: 1 }}
                    style={styles.linearGradient}
                >
                    <StatusBar barStyle={'light-content'}/>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <Icon 
                        name='settings' 
                        size={24} 
                        color={Colors.WHITE} 
                        style={{ marginLeft: 'auto' }}
                    />
                    </TouchableOpacity>
                    <Text style={styles.header}>{`Good ${timeOfDay}`}</Text>
                    <CardGrid />
                    <Spacer />
                    <Text style={styles.header}>Recently played</Text>
                    <CardRow />
                    <Spacer />
                    <Text style={styles.header}>Your top shows</Text>
                    <CardRow />
                    <Spacer />
                    <Text style={styles.header}>{`Made for ${user}`}</Text>
                    <CardRow />
                    <Spacer />
                    <Text style={styles.header}>New releases for you</Text>
                    <CardRow />
                </LinearGradient>
            </ScrollView>
        </View>
    )
}

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
        letterSpacing: Typography.CHAR_SPACING_1,
        marginBottom: 15
    }
})

export default HomeScreen;