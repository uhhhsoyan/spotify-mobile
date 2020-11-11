import createDataContext from './createDataContext';
 
const dataReducer = (state, action) => {
    switch (action.type) {  
        case 'select_song':
            return { song: action.payload, play: true };
        case 'play_song':
            return { ...state, play: true };
        case 'pause_song':
            return { ...state, play: false };
        default:
            return state;
    }
}

const selectSong = dispatch => (id) => {
    dispatch({ type: 'select_song', payload: id })
}

const playSong = dispatch => () => {
    dispatch({ type: 'play_song' })
}

const pauseSong = dispatch => () => {
    dispatch({ type: 'pause_song' })
}

export const { Provider, Context } = createDataContext(
    dataReducer,
    { selectSong, playSong, pauseSong },
    { song: null, play: false }
)