import { AsyncStorage } from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import { getAuth } from '../api/spotifyAuth';
 
const authReducer = (state, action) => {
    switch (action.type) {  
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'signout':
            return { token: null, errorMessage: '' };
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'clear_error':
            return { ...state, errorMessage: '' };
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

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
)