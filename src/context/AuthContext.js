import { AsyncStorage } from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import { getAuth } from '../api/spotifyAuth';
import spotifySearch from '../api/spotifySearch';
import { Audio } from 'expo-av';
 
const authReducer = (state, action) => {
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
          return { ...state, audio: action.payload[0], trackData: action.payload[1], playing: true };
        default:
            return state;
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({ type: 'signin', payload: token })
        navigate('mainFlow');
    } else {
        navigate('loginFlow');
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error' });
}

const signin = dispatch => async () => {
    try {
        const token = await getAuth();
        //await AsyncStorage.setItem('token', token);
        dispatch({ type: 'signin', payload: token })
    } catch(err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
    }
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' })
    navigate('loginFlow')
}

const playSong = dispatch => () => {
    dispatch({ type: 'play_song' })
}

const pauseSong = dispatch => () => {
    dispatch({ type: 'pause_song' })
}

const showModal = dispatch => () => {
    dispatch({ type: 'show_modal' })
}

const hideModal = dispatch => () => {
    dispatch({ type: 'hide_modal' })
}

const selectSong = dispatch => async (songId, token) => {
  const { data } = await spotifySearch.get(`/tracks/${songId}`, {
    headers: { 'Authorization': 'Bearer ' + token },
  })
  const soundObject = new Audio.Sound();
  await soundObject.loadAsync({ uri: data.preview_url });
  await soundObject.playAsync();
    
  dispatch({ type: 'select_song', payload: [soundObject, data] })
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, clearErrorMessage, tryLocalSignin, playSong, pauseSong, showModal, hideModal, selectSong },
    { token: null, errorMessage: '', trackData: null, audio: null, playing: true, duration: 0, modalVisible: false }
)