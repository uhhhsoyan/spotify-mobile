import createDataContext from './createDataContext';
 
const dataReducer = (state, action) => {
    switch (action.type) {  
        case 'select_song':
            return { ...state, song: action.payload, play: true };
        case 'play_song':
            return { ...state, play: true };
        case 'pause_song':
            return { ...state, play: false };
        case 'show_song_modal':
            return { ...state, show_song_modal: true };
        case 'hide_song_modal':
            return { ...state, show_song_modal: false };
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

const showSongModal = dispatch => {
    dispatch({ type: 'show_song_modal' })
}

const hideSongModal = dispatch => {
    dispatch({ type: 'hide_song_modal' })
}

export const { Provider, Context } = createDataContext(
    dataReducer,
    { selectSong, playSong, pauseSong, showSongModal, hideSongModal },
    { song: null, play: false, showSongModal: false }
)