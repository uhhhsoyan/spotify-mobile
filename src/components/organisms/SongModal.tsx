import React, { useState, useEffect, useContext} from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';
import { Colors, Typography } from '../../styles';
import Icon from '../../assets/icons';

type Props = {
  trackData: ;
  playAudio: ;
  pauseAudio: ;
  progress: ;
  duration: ;
}

const SongModal = ({ trackData, playAudio, pauseAudio, progress, duration }) => {
    const { state, hideModal } = useContext(AuthContext);

    const renderPlayPause = () => {
        if (state.playing === true) {
            return (
                <TouchableOpacity onPress={() => pauseAudio()} >
                    <Icon name='pauseCircle' size={70} color={Colors.WHITE} />
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity onPress={() => playAudio()} >
                    <Icon name='playCircle' size={70} color={Colors.WHITE} />
                </TouchableOpacity>
            )
        }
    }

    const renderModal = () => {
        if (trackData) {
            return (
                <View style={styles.container}>
                    <View style={styles.topLine}>
                        <TouchableOpacity onPress={() => hideModal()}>
                            <Icon name='arrowDown' color='white' size={24} /> 
                        </TouchableOpacity>
                        <Text style={styles.text}>Playlist Name</Text>
                        <Icon name='ellipsis' color='white' size={24} /> 
                    </View>
                    <Image style={styles.thumbnail} source={{ uri: trackData.album.images[0].url}}/>
                    <View style={styles.titleRow}>
                        <View>
                            <Text style={styles.title}>{trackData.name}</Text>
                            <Text style={styles.subtitle}>{trackData.album.artists[0].name}</Text>
                        </View>
                        <Icon name='heartOutline' size={24} color='white' />
                    </View>
                    <View style={styles.timelineBackground}>
                      <View style={[styles.timeline, { width: `${(progress / duration) * 100}%` }]}>
                        <View style={styles.timelineMarker}></View>
                      </View>
                    </View>
                    <View style={styles.controlsRow}>
                        <Icon name='shuffle' size={24} color={Colors.GRAY_LIGHT} />
                        <Icon name='jumpToStart' size={40} color={Colors.WHITE} />
                        <TouchableOpacity onPress={() => togglePlayPause(!state.playing)}>
                            {renderPlayPause()}
                        </TouchableOpacity>
                        <Icon name='nextSong' size={40} color={Colors.WHITE} />
                        <Icon name='repeat' size={24} color={Colors.GRAY_LIGHT} />
                    </View>
                </View>
            )
        } else {
            return null
        }
    }

    return (
        <Modal
            animationType='slide'
            visible={state.modalVisible}
            presentationStyle='fullScreen'
        >
            {renderModal()}
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.BACKGROUND,
        padding: 25,
        paddingTop: 70
    },
    topLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    text: {
        color: Colors.WHITE,
        fontFamily: Typography.FONT_700,
        fontSize: Typography.FONT_SIZE_12
    },
    thumbnail: {
        width: '100%',
        height: 'auto',
        aspectRatio: 1,
        marginTop: 70,
        marginBottom: 60
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 30
    },
    title: {
        color: Colors.WHITE,
        fontFamily: Typography.FONT_700,
        fontSize: Typography.FONT_SIZE_22,
        paddingBottom: 4
    },
    subtitle: {
        color: Colors.GRAY_LIGHT,
        fontFamily: Typography.FONT_500,
        fontSize: Typography.FONT_SIZE_16,
    },
    timeline: {
      height: 4,
      borderRadius: 10,
      backgroundColor: Colors.WHITE,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    timelineMarker: {
      height: 15,
      width: 'auto',
      aspectRatio: 1,
      borderRadius: 15,
      backgroundColor: Colors.WHITE,
    },
    timelineBackground: {
        width: '100%',
        height: 4,
        borderRadius: 10,
        backgroundColor: Colors.GRAY_VERY_LIGHT,
    },
    timelineLabelRow: {

    },
    timelineLabels: {

    },
    controlsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 5,
        paddingTop: 35
    }
})

export default SongModal;