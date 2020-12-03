import React, { FC, useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';
import { Colors, Typography } from '../../styles';
import Icon from '../../assets/icons';
import SongModal from '../organisms/SongModal';
import { AuthState, AuthActions } from '../../context/types';

const SongBar: FC = () => {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const { state, playSong, pauseSong, showModal, selectSong } = useContext(AuthContext);

  useEffect(() => {
    selectSong('5bHV6UowNC1YVu8LYDkUjU', state.token); // why only expecting 1 argument?
  }, [selectSong, state.token]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (state.playing) {
      interval = setInterval(async () => {
        if (state.audio) {
          const status = await state.audio.getStatusAsync();
          setProgress(status.positionMillis); // only exists if isLoaded = true, not ifLoaded = false
        }
      }, 100);
    }
    return () => clearInterval(interval);
  }, [state.playing, state.audio]);

  useEffect(() => {
    const getDuration = async () => {
      if (state.audio) {
        const status = await state.audio.getStatusAsync();
        setDuration(status.durationMillis); // only exists if isLoaded = true, not ifLoaded = false
      }
    };
    getDuration();
  }, [state.audio]);

  const playAudio = async () => {
    // added check to get around TS error for audio possibly null
    if (state.audio) {
      await state.audio.playAsync();
    }
    playSong();
  };

  const pauseAudio = async () => {
    // added check to get around TS error for audio possibly null
    if (state.audio) {
      await state.audio.pauseAsync();
    }
    pauseSong();
  };

  const renderPlayPause = () => {
    if (state.playing === true) {
      return (
        <TouchableOpacity onPress={() => pauseAudio()}>
          <Icon name="pause" size={24} color="white" style={{ paddingRight: 15 }} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => playAudio()}>
          <Icon name="play" size={24} color="white" style={{ paddingRight: 15 }} />
        </TouchableOpacity>
      );
    }
  };

  const renderSongBar = () => {
    if (state.trackData) {
      return (
        <View style={styles.container}>
          <View style={styles.timelineBackground}>
            <View style={[styles.timeline, { width: `${(progress / duration) * 100}%` }]}>
            </View>
          </View>
          <TouchableOpacity onPress={() => showModal()} style={{ width: '90%' }}>
            <View style={styles.leftContainer}>
              <Image
                style={styles.thumbnail}
                source={{ uri: state.trackData.album.images[0].url }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{state.trackData.name}</Text>
                <Text style={styles.subtitle}>{state.trackData.album.artists[0].name}</Text>
              </View>
            </View>
          </TouchableOpacity>
          {renderPlayPause()}
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <SongModal
        trackData={state.trackData}
        playAudio={playAudio}
        pauseAudio={pauseAudio}
        progress={progress}
        duration={duration}
      />
      {renderSongBar()}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: 60,
    zIndex: 1,
    backgroundColor: Colors.GRAY_MEDIUM,
    bottom: 70,
    borderBottomColor: Colors.BLACK,
    borderBottomWidth: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeline: {
    height: 2,
    backgroundColor: Colors.WHITE,
  },
  timelineBackground: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'flex-start',
    height: 2,
    backgroundColor: Colors.GRAY_VERY_LIGHT,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  thumbnail: {
    height: 58,
    width: 'auto',
    aspectRatio: 1,
  },
  textContainer: {
    flexDirection: 'column',
    paddingLeft: 10,
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
});

export default SongBar;
