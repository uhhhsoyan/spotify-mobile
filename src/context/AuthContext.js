import { AsyncStorage } from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import { getAuth } from '../api/spotifyAuth';
 
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
        case 'toggle_play_pause':
            return { ...state, playing: action.payload };
        case 'pause_song':
            return { ...state, playing: false };
        case 'show_modal':
            return { ...state, modalVisible: true };
        case 'hide_modal':
            return { ...state, modalVisible: false };
        case 'select_song':
            return { ...state, currentSongId: action.payload, playing: true };
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

const togglePlayPause = dispatch => (toggle) => {
    dispatch({ type: 'toggle_play_pause', payload: toggle })
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

const selectSong = dispatch => (songId) => {
    dispatch({ type: 'select_song', playload: songId })
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, clearErrorMessage, tryLocalSignin, togglePlayPause, pauseSong, showModal, hideModal, selectSong },
    { token: null, errorMessage: '', playing: true, modalVisible: false, currentSongId: "11dFghVXANMlKmJXsNCbNl" }
)