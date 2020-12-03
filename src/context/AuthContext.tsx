import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import { getAuth } from '../api/spotifyAuth';
import spotifySearch from '../api/spotifySearch';
import { Audio } from 'expo-av';
import {
  AuthState,
  AuthActions,
  SignIn,
  SignOut,
  AddError,
  ClearError,
  PlaySong,
  PauseSong,
  ShowModal,
  HideModal,
  SelectSong,
  initialAuthState,
} from './types';
import { Dispatch } from 'react';

const authReducer = (state: AuthState, action: AuthActions) => {
  switch (action.type) {
    case 'signin':
      return { ...state, errorMessage: '', token: action.payload };
    case 'signout':
      return { ...state, token: null, errorMessage: '' };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error':
      return { ...state, errorMessage: '' };
    case 'play_song':
      return { ...state, playing: true };
    case 'pause_song':
      return { ...state, playing: false };
    case 'show_modal':
      return { ...state, modalVisible: true };
    case 'hide_modal':
      return { ...state, modalVisible: false };
    case 'select_song':
      if (state.audio) {
        console.log('Unloading previous track');
        state.audio.unloadAsync();
      }
      return {
        ...state,
        audio: action.payload[0],
        trackData: action.payload[1],
        playing: true,
      };
    default:
      return state;
  }
};

export const clearErrorMessage = (dispatch: Dispatch<ClearError>) => () => {
  dispatch({ type: 'clear_error' });
};

export const signin = (dispatch: Dispatch<SignIn | AddError>) => async () => {
  try {
    const token = await getAuth();
    //await AsyncStorage.setItem('token', token);
    dispatch({ type: 'signin', payload: token });
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
  }
};

export const signout = (dispatch: Dispatch<SignOut>) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
};

export const playSong = (dispatch: Dispatch<PlaySong>) => () => {
  dispatch({ type: 'play_song' });
};

export const pauseSong = (dispatch: Dispatch<PauseSong>) => () => {
  dispatch({ type: 'pause_song' });
};

export const showModal = (dispatch: Dispatch<ShowModal>) => () => {
  dispatch({ type: 'show_modal' });
};

export const hideModal = (dispatch: Dispatch<HideModal>) => () => {
  dispatch({ type: 'hide_modal' });
};

export const selectSong = (dispatch: Dispatch<SelectSong>) =>
  async (songId: string, token: string) => {
    const { data } = await spotifySearch.get(`/tracks/${songId}`, {
      headers: { Authorization: 'Bearer ' + token },
    });
    const soundObject = new Audio.Sound();
    await soundObject.loadAsync({ uri: data.preview_url });
    await soundObject.playAsync();

    dispatch({ type: 'select_song', payload: [soundObject, data] });
  };

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signin,
    signout,
    clearErrorMessage,
    playSong,
    pauseSong,
    showModal,
    hideModal,
    selectSong,
  },
  initialAuthState,
);
