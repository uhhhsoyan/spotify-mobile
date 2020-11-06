import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Colors, Typography } from '../styles';
import Icon from '../assets/icons';
import { SETTINGS_MENU } from '../data';

const SettingsScreen = () => {
    
    const renderMenu = (items) => {
        return (
            items.map((item, idx) => {
                return (
                    <View key={idx} style={styles.menuItem}>
                        <Text style={styles.menuText}>{item}</Text>
                        <Icon name='arrowForward' size={24} color={Colors.GRAY_LIGHT} />
                    </View>
                )
            })
        )
    }
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.profileCard}>
                    <Image source={require('../assets/images/Profile.png')} style={styles.profileImg} />
                    <View style={styles.profileTextContainer}>
                        <Text style={styles.profileName}>Eric Essoyan</Text>
                        <Text style={styles.profileSubText}>View Profile</Text>
                    </View>
                    <Icon name='arrowForward' size={24} color={Colors.GRAY_LIGHT} style={{ marginLeft: 'auto' }}/>
                </View>
                {renderMenu(SETTINGS_MENU)}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>LOG OUT</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BACKGROUND,
        flex: 1,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 15
    },
    menuText: {
        color: Colors.WHITE,
        fontFamily: Typography.FONT_400,
        fontSize: Typography.FONT_SIZE_18,
    },
    profileCard: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 50,
        marginBottom: 50,
        paddingRight: 15,
        paddingLeft: 10,
    },
    profileImg: {
        height: 70,
        width: 'auto',
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10
    },
    profileName: {
        fontFamily: Typography.FONT_700,
        fontSize: Typography.FONT_SIZE_24,
        color: Colors.WHITE,
    },
    profileSubText: {
        fontFamily: Typography.FONT_400,
        fontSize: Typography.FONT_SIZE_12,
        color: Colors.GRAY_LIGHT,
    },
    button: {
        backgroundColor: Colors.WHITE,
        color: Colors.BACKGROUND,
        height: 60,
        width: 200,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
        alignSelf: 'center',
    },
    buttonText: {
        color: Colors.BACKGROUND,
        fontFamily: Typography.FONT_700,
        fontSize: Typography.FONT_SIZE_16,
    }
})

export default SettingsScreen;