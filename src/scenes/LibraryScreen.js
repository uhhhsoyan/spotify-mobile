import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Typography } from '../styles';

const LibraryScreen = () => {
    const [music, setMusic] = useState(true);
    
    const renderMusicScreen = () => {
        return (
            <View>
                <View style={styles.subHeader}>
                    <Text style={styles.subHeaderText}>Playlists</Text>
                    <Text style={styles.subHeaderText}>Artists</Text>
                    <Text style={styles.subHeaderText}>Albums</Text>
                </View>

            </View>
        )
    }

    const renderPodcastScreen = () => {
        return (
            <View>
                <View style={styles.subHeader}>
                    <Text style={styles.subHeaderText}>Episodes</Text>
                    <Text style={styles.subHeaderText}>Downloads</Text>
                    <Text style={styles.subHeaderText}>Shows</Text>
                </View>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setMusic(true)}>
                    <Text style={styles.headerText}>Music</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMusic(false)}>
                    <Text style={styles.headerText}>Podcasts</Text>
                </TouchableOpacity>
            </View>
            {music ? renderMusicScreen() : renderPodcastScreen() }
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND
    },
    header: {
        marginTop: 50,
        marginBottom: 15,
        marginLeft: 10,
        flexDirection: 'row',
    },
    headerText: {
        fontFamily: Typography.FONT_700,
        fontSize: Typography.FONT_SIZE_32,
        color: Colors.WHITE,
        paddingRight: 15,
    },
    subHeader: {
        marginLeft: 10,
        flexDirection: 'row',
    },
    subHeaderText: {
        fontFamily: Typography.FONT_700,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.WHITE,
        paddingRight: 15,
    }
})

export default LibraryScreen;