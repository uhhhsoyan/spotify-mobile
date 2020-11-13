import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { Context as AuthContext } from '../../context/AuthContext';
import { Colors, Typography } from '../../styles';
import Icon from '../../assets/icons';
import SongModal from '../organisms/SongModal';
import spotifySearch from '../../api/spotifySearch';

const SongBar = () => {
    const [trackData, setTrackData] = useState(null)
    const [audio, setAudio] = useState(null);
    const { state, togglePlayPause, showModal } = useContext(AuthContext);
    
    useEffect(() => {
        const search = async () => {
            const { data } = await spotifySearch.get(`/tracks/${state.currentSongId}`, {
                headers: { 'Authorization': 'Bearer ' + state.token },
                params: {
                    
                }
            })
            setTrackData(data);
        };
        search()
    }, [state.currentSongId])
    
    useEffect(() => {
        const loadSong = async () => {
            const soundObject = new Audio.Sound();
            try {
                await soundObject.loadAsync({ uri: trackData.preview_url });
                await soundObject.playAsync();
                setInterval(async () => {
                    const status = await soundObject.getStatusAsync();
                    console.log(status)
                }, 500)
            } catch (err) {
                console.log('We got an error!')
            }
        }
        if (trackData) {
            loadSong()
        }
    }, [trackData])

    const renderPlayPause = () => {
        if (state.playing === true) {
            return <Icon name='pause' size={24} color='white' />
        } else {
            return <Icon name='play' size={24} color='white' />
        }
    }

    const renderSongBar = () => {
        if (trackData) {
            return (
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => showModal()} style={{ width: '90%'}}>
                        <View style={styles.leftContainer}>
                            <Image style={styles.thumbnail} source={{ uri: trackData.album.images[0].url }}/>
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>{trackData.name}</Text>
                                <Text style={styles.subtitle}>{trackData.album.artists[0].name}</Text>
                            </View>
                        </View>  
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => togglePlayPause(!state.playing)}>
                        {renderPlayPause()}
                    </TouchableOpacity>
                </View>
            )
        } else {
            return null
        }
    }

    return (
        <>
            <SongModal trackData={trackData} />
            {renderSongBar()}            
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: 60,
        zIndex: 1,
        backgroundColor: Colors.GRAY_MEDIUM,
        bottom: 0,
        borderBottomColor: 'black',
        borderBottomWidth: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 15
    },
    timeline: {

    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%'
    },
    thumbnail: {
        height: 60,
        width: 'auto',
        aspectRatio: 1,
    },
    textContainer: {
        flexDirection: 'column',
        paddingLeft: 10
    },
    title: {
        color: Colors.WHITE,
        fontFamily: Typography.FONT_500,
        fontSize: Typography.FONT_SIZE_14,
    },
    subtitle: {
        color: Colors.GRAY_LIGHT,
        fontFamily: Typography.FONT_500,
        fontSize: Typography.FONT_SIZE_14,
    },

})

export default SongBar;